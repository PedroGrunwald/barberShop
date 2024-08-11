import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, xxx</h2>
        <p>xxxx, xx de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca.." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com o barbershop"
            src="banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit"> Confirmado </Badge>
              <h3 className="font-semibold">Corte de cabelo xxx </h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage />
                </Avatar>
                <p className="text-sm">Barbearia XXX</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Mes XX</p>
              <p className="text-2xl">dia XX</p>
              <p className="text-sm">hora XX</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Home
