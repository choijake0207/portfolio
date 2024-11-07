import EchoDemo from "../Assets/EchoDemo.png"
import HabitDemo from "../Assets/HabitDemo.png"
import Lift4DummiesDemo from "../Assets/LiftDemo.png"
import TaskerDemo from "../Assets/TaskerDemo.png"
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

export const textVersions = [
    {
        id: "short",
        text: "Hi, I'm Jake, a front end engineer passionate about blending creativity and logic to bring ideas to life. Originally a business administration major, I found my true calling in front-end development through self-study in college"
    },
    {
        id: "long",
        text: "Hi, I'm Jake, a front-end engineer who's deeply passionate about creating dynamic and visually engaging web experiences. My journey began in college, where I was majoring in business administration but felt drawn to the creative and logical challenges of front-end development. I'm fascinated by front-end development because it combines creativity with logic, allowing me to bring innovative ideas into reality. I'm continually motivated to expand my skills and create user-focused, engaging web applications that make a difference."
    },
 
]