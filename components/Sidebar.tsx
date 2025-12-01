"use client";

import { shape_store } from "@/zustand_store/shapes_store"

import {
    Hand,
    Pencil,
    Square,
    Circle,
    Undo,
    Trash2,
    Slash
} from "lucide-react"

const tools = [
    {icon: Hand, name: "hand"},
    {icon: Slash, name: "line"},
    { icon: Pencil, name: "pencil" },
    { icon: Square, name: "rectangle" },
    { icon: Circle, name: "ellipse" },
]

const actions = [
    { icon: Undo, name: "undo" },
    { icon: Trash2, name: "clear" }
]

export default function Sidebar() {

    const { shape, setShape } = shape_store();

    return (
        <div className="bg-black w-14 flex flex-col h-screen border-r border-gray-800 overflow-y-auto">
            <div className="flex-1 py-2 space-y-2">
                <div className="space-y-1">
                    {tools.map((Tool, index) => (
                        <div
                            key={index}
                            className={`${shape == Tool.name ? `bg-gray-800` : `bg-transparent`} w-10 h-10 mx-auto flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-gray-800 active:bg-gray-900 hover:rounded-xl transition-colors group`}
                            onClick={() => setShape(Tool.name)}
                            title={Tool.name}
                        >
                            <Tool.icon size={18} className="text-gray-400 group-hover:text-white" />
                        </div>
                    ))}
                </div>
                <div className="w-full h-px bg-gray-800 my-1" />
                <div className="space-y-1">
                    {actions.map((Action, index) => (
                        <div
                            key={index}
                            onClick={() => setShape(Action.name)}
                            className="w-10 h-10 mx-auto flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-gray-800 hover:rounded-xl transition-colors group"
                            title={Action.name}
                        >
                            <Action.icon size={18} className="text-gray-400 group-hover:text-white" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}  