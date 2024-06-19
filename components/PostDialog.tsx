import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "./ui/textarea"
import { Images } from "lucide-react"
import { useRef, useState } from "react"
import { readFileAsDataUrl } from "@/lib/utils"
import Image from "next/image"
import { createPostAction } from "@/lib/serveractions"
import { toast } from "sonner"

export function PostDialog({ setOpen, open, src }: { setOpen: any, open: boolean, src: string }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");

   

    
    

    
}
