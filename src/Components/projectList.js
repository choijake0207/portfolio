import EchoDemo from "../Assets/EchoDemo.png"
import HabitDemo from "../Assets/HabitPic.png"
import Lift4DummiesDemo from "../Assets/Lift4Dummies.png"
import TaskerDemo from "../Assets/TaskerPic.png"

export const projects = [
    {
        id: 0,
        projectName: "Echo-v1",
        skills: [
            "React.js", "Express.js", "Node.js", "Rest APIs", "JWT", "MySQL"
        ],
        description: "A full-stack social media application built similarly to the style of Twitter. Users are able to post content as well as liking, commenting, and saving other's posts.",
        liveStatus: false,
        imageURL: EchoDemo
    },
    {
        id: 1,
        projectName: "Habit.io",
        skills: [
            "React.js", "Express.js", "Node.js", "Rest APIs", "MySQL"
        ],
        description: "A full-stack habit management platform allowing users to create, pause, and reset habits and duration-based goals. Users are also able to view all data including number of resets, number of completed goals, and more.",
        liveStatus: false,
        imageURL: HabitDemo
    },
    {
        id: 2,
        projectName: "Tasker",
        skills: [
            "React.js, @dnd-kit"
        ],
        description: "A client-side personal KanBan board allowing users to create boards, customize columns, and drag-drop items.",
        liveStatus: true,
        imageURL: TaskerDemo

    },
    {
        id: 3,
        projectName: "Lift-4-Dummies",
        skills: ["Vanilla JS"],
        description: "A client-side project designed to allow users to learn about fitness techniques in an interactive method through the use of clickable SVGs.",
        liveStatus: true,
        imageURL: Lift4DummiesDemo
    }
   
]