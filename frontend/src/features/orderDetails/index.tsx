import { useState } from "react"
import { debounce } from "debounce"

import { Button } from "@/components/button"
import { AutoComplete } from "@/components/form/input/autocomplete"
import { Icon } from "@/components/icon"
import { ProductList } from "./productList"

import { FormContainer } from "@/components/form/container"
import { Select } from "@/components/form/input/select"
import { DatePicker } from "@/components/form/input/date"
import { DateTime } from "@/components/form/input/time"
import { useFindClients } from '../../query'
import { Summary } from "./Summary"
import { z } from "zod"
import toast from "react-hot-toast"
import { IProduct, useListProducts } from "@/contexts/products"
import { useNavigate } from "react-router"

export interface FormData {
  client: {
    id: string;
    name: string;
  };
  status: string;
  date: string;
  time: string;
}

export interface Order extends FormData {
  products: IProduct[] | null;
}

export function OrderDetails() {
  const { products } = useListProducts()
  const { data: clients, isLoading, mutateAsync } = useFindClients()

  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormData>({
    client: {} as any,
    status: '',
    date: '',
    time: '',
  })

  const debounceSearching = debounce(async (value: string) => {
    if (value.length < 3) return

    mutateAsync({
      data: {
        search: value
      }
    })
  }, 500);

  function handleChange(search: string) {
    debounceSearching(search);
  }

  function handleSubmit() {
    const schema = z.object({
      client: z.object({
        id: z.string(),
        name: z.string(),
      }),
      status: z.string().refine((value) => value !== '0'),
      date: z.string().refine((value) => value !== ''),
      time: z.string().refine((value) => value !== ''),
    })

    try {
      const data = schema.parse(formData)

      if (products?.length === 0) {
        toast.error('Adicione pelo menos um produto')
        return
      }

      const order = {
        ...data,
        products
      }

      createOrder(order)

      toast.success('Venda finalizada com sucesso')

      navigate('/orders')
    } catch (error) {
      toast.error('Preencha todos os campos corretamente')
    }
  }

  function createOrder(order: Order) {
    const dataLocal = localStorage.getItem('GLUK:orders')

    if (!dataLocal) {
      localStorage.setItem('GLUK:orders', JSON.stringify([order]));
      return true
    }

    const data: Order[] = JSON.parse(dataLocal)

    localStorage.setItem('GLUK:orders', JSON.stringify([order, ...data]));
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
      className="d-flex flex-column h-100"
    >
      <div className="p-3 flex-fill d-flex flex-column overflow-hidden">
        <AutoComplete
          name="client"
          label="Buscar cliente"
          onChange={handleChange}
          onSelected={(value) => {
            setFormData({
              ...formData,
              client: {
                id: value.value,
                name: value.label
              }
            })
          }}
          options={clients?.map(client => ({
            value: client.id.toString(),
            label: client.name
          })) ?? []}
          isLoading={isLoading}
        />

        <Select
          label="Status"
          name="status"
          options={[
            { value: '1', label: 'Aberta' },
            { value: '2', label: 'Concluída' },
            { value: '3', label: 'Cancelada' },
          ]}
          onChange={(e) => {
            setFormData({
              ...formData,
              status: e
            })
          }}
        />

        <div className="d-flex gap-3">
          <DatePicker
            label="Data da venda"
            name="date"
            onChange={(value) => {
              setFormData({
                ...formData,
                date: value
              })
            }}
          />

          <DateTime
            label="Hora da venda"
            name="time"
            onChange={(value) => {
              setFormData({
                ...formData,
                time: value
              })
            }}
          />
        </div>

        <ProductList />

        <Summary />

        <Button onClick={handleSubmit}>
          <Icon name="check" />

          Finalizar venda
        </Button>
      </div>
    </FormContainer>
  )
}