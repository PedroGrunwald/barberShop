import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-grow items-center justify-between p-5">
        <Image alt="FSW BARBER" src="/Logo.png" height={18} width={120} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
