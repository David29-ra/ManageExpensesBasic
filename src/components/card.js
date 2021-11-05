import styled from "@emotion/styled";
import trash from "../static/images/trash.svg"

export default function Card({ name, qty, total }) {
  return (
    <Cardcontainer>
      <div>
        <Cardname children={name} />
        <TransactionsQty children={qty + " transactions"} />
      </div>
      <Total children={"$" + total + ".00"} />
      <Trashicon>
        <img src={trash} alt="trash" />
      </Trashicon>
    </Cardcontainer>
  );
}

const Cardcontainer = styled.div`
  width: 150px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`

const Cardname = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;
`

const TransactionsQty = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #4f4f4f;
`

const Total = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #4f4f4f;
`

const Trashicon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #2F80ED;
  border-radius: 50px;
`
