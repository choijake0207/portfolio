import EchoDemo from "../Assets/EchoDemo.png"
import HabitDemo from "../Assets/HabitPic.png"
import Lift4DummiesDemo from "../Assets/Lift4Dummies.png"
import TaskerDemo from "../Assets/TaskerPic.png"
import ReactLogo from "../Assets/React-Logos.svg"
import ExpressLogo from "../Assets/Express-Logos.webp"
import CSSLogo from "../Assets/CSS-Logo.svg"
import GitLogo from "../Assets/Git-Logo.png"
import HTMLLogo from "../Assets/HTML-Logo.png"
import JavaScriptLogo from "../Assets/JavaScript-Logo.png"
import MySQLLogo from "../Assets/mysql-logo.svg"
import NodeLogo from "../Assets/NODE-LOGOS.png"
import SequelizeLogo from "../Assets/Sequelize-Logo.svg"
import React from "react"

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

export const skills = [
    {
        name: "React.js",
        imageURL: ReactLogo
    },
    {
        name: "Express.js",
        imageURL: ExpressLogo
    },
    {
        name: "Node.js",
        imageURL: NodeLogo
    },
    {
        name: "MySQL",
        imageURL: MySQLLogo
    },
    {   
        name: "Sequelize",
        imageURL: SequelizeLogo
    },
    {
        name: "Git",
        imageURL: GitLogo
    },
    {
        name: "JavaScript",
        imageURL: JavaScriptLogo
    },
    {
        name: "CSS",
        imageURL: CSSLogo
    }
]