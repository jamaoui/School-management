import {Moon, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
import {useTheme} from "@/components/theme-provider"

export function ModeToggle() {
  const {setTheme, theme} = useTheme()

  return (
    <Button onClick={setTheme} size="icon">
      {theme === 'light' ?
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        :
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
      }
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
