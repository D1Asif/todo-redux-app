import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";


export default function TodoContainer() {
    const [priority, setPriority] = useState("");

    // const { todos } = useAppSelector((state) => state.todos);

    const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="flex justify-center gap-3 mb-5">
                <AddTodoModal />
                <TodoFilter priority={priority} setPriority={setPriority} />
            </div>
            <div className="w-full bg-primary-gradient rounded-xl p-1">
                {/* <div className="bg-white p-3 flex justify-center items-center rounded-md">
                <p>
                    There is no task pending
                </p>
            </div> */}
                <div className="bg-white p-5 rounded-lg space-y-3">
                    {
                        todos.data.map((todo) => (
                            <TodoCard todo={todo} key={todo._id} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
