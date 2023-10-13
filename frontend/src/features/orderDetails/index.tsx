import { Button } from "@/components/button"
import { AutoComplete } from "@/components/form/input/autocomplete"
import { Icon } from "@/components/icon"
import { ProductList } from "./productList"

export function OrderDetails() {
  const summary = [
    {
      label: 'Itens',
      value: '0 itens'
    },
    {
      label: 'Sub Total',
      value: 'R$ 0,00'
    },
    {
      label: 'Desconto',
      value: 'R$ 0,00'
    },
    {
      label: 'Total',
      value: 'R$ 0,00'
    },
  ]

  return (
    <div className="p-3 flex-fill d-flex flex-column overflow-hidden">
      <AutoComplete />

      <div className="form-floating mb-3">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Selecione um status</option>
          <option value="1">Aberta</option>
          <option value="2">Concluída</option>
          <option value="3">Cancelada</option>
        </select>

        <label>Status</label>
      </div>

      <div className="d-flex gap-3">
        <div className="input-group mb-3">
          <div className="form-floating">
            <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" maxLength={3} />
            <label>Data da venda</label>
          </div>
        </div>

        <div className="input-group mb-3">
          <div className="form-floating">
            <input type="time" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label>Hora da venda</label>
          </div>
        </div>
      </div>

      <ProductList />

      <div className="mb-3">
        <div className="bg-body-secondary rounded p-3">
          <ul className="m-0">
            {summary.map((item, index) => (
              <li
                key={index}
                className={`m-0 d-flex align-items-center justify-content-between ${item.label === 'Total' && 'border-top mt-2 pt-2'}`}
              >
                <span>{item.label}</span>

                <span className={`fw-bold ${item.label === 'Total' && 'h5'}`}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button>
        <Icon name="check" />

        Finalizar venda
      </Button>
    </div>
  )
}