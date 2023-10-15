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

interface FormData {
  client: {
    id: string;
    name: string;
  };
  status: string;
  date: string;
  time: string;
}


export function OrderDetails() {
  const { data: clients, isLoading, mutateAsync } = useFindClients()

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
    console.log({ formData })
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