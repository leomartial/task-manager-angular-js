export interface SubTask{
    id: number;
    title:string;
    done:boolean;
}

export interface Task{
    id:number;
    title:string;
    desc?:string;
    date:Date;
    important:boolean
    subtasks: SubTask[];
    done:boolean;

}

export interface TaskList {
    id: number;
    name: string;
    selected: boolean;
    tasks: Task[]; 
}

export interface AppData{
    name: string;
    taskview: string;
    tasklist: TaskList[];
}

export interface TaskClick{
    idList:number,
    idTask:number,
}
export interface SubTaskClick{
    idList:number,
    idTask:number,
    idSubTask:number
}

