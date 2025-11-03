
import React from "react"
import { SparklesIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const BadgeButton = () => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer rounded-full border border-white/10 
                 bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium 
                 dark:text-neutral-200 text-neutral-900 shadow-sm transition-all duration-300 
                 hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300"
    >
      <SparklesIcon className="mr-2 h-4 w-4 text-orange-400 fill-orange-300/30 stroke-[1.5]" />
      shubhamnayak446@gmail.com
    </Badge>
  )
}

export default BadgeButton
