const currentDate = new Date()
const currentHours = currentDate.getHours().toString()
let currentMinutes = currentDate.getMinutes().toString()
if (currentMinutes.length === 1)
    currentMinutes = "0" + currentMinutes

function Clock() {
  return (
    <div className="Clock">
      <p>{currentHours + ":" + currentMinutes}</p>
    </div>
  )
}

export default Clock;
