import { cn } from "@/utils/merge-classes";
import { title } from "process";

interface Props {
    color: string, 
    title: string
}

export function Badge({ color, title }: Props) {
    return (
        <span className={`rounded-full ${color} w-min py-2 px-4 text-center font-bold`}>{title}</span>
    );
}