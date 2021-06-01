const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((t) => <h3 key={t.id}>{t.text}</h3> )}
    </div>
  )
}

export default Tasks
