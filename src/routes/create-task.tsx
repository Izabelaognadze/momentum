import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-task')({
  component: CreateTask,
})

function CreateTask() {
  return <div className="p-2">Hello from create task!</div>
}