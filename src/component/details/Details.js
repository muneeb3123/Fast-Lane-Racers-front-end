import { useParams } from "react-router-dom"

const Details = () => {
  const { name } = useParams()
  return (
    <div>
      <p>
        Details of {name}
      </p>
    </div>
  )
}

export default Details