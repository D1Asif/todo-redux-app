import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


export default function TodoContainer() {
    const { todos } = useAppSelector((state) => state.todos);
    return (
        <div>
            <div className="flex justify-center gap-3 mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="w-full bg-primary-gradient rounded-xl p-1">
                {/* <div className="bg-white p-3 flex justify-center items-center rounded-md">
                <p>
                    There is no task pending
                </p>
            </div> */}
                <div className="bg-white p-5 rounded-lg space-y-3">
                    {
                        todos.map((todo) => (
                            <TodoCard todo={todo} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
