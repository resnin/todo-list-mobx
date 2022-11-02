import {makeAutoObservable} from "mobx"

export interface ITodo {
    id: number
    title: string
    isCompleted: boolean
}

class Todo {
    todos: ITodo[] = [
        {id: 1, title: 'first todo', isCompleted: false},
        {id: 2, title: 'second todo', isCompleted: false},
        {id: 3, title: 'third todo', isCompleted: true},
        {id: 4, title: 'long long long long long long long long long long long long long long long long long long long long long long long long long long todo', isCompleted: true}
    ]
    filter: string = 'All'

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: ITodo) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(todo: ITodo) {
        todo.isCompleted = !todo.isCompleted
    }

    changeFilter(value: string) {
        this.filter = value
    }

}

export default new Todo()