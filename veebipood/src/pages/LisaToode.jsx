import { useRef } from "react"

function LisaToode() {
  const toodeRef = useRef();

  const lisa = () => {
    if (toodeRef.current.value === "") {
      alert("Nimi puudu!");
    } else {
      alert("Edukalt lisatud: " + toodeRef.current.value);
    }
  }

  return (
    <div>
      <label>Toote nimi</label> <br />
      <input ref={toodeRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default LisaToode