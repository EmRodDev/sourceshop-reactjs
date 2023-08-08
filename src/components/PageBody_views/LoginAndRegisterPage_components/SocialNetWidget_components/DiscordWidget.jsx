import { IconButton } from "@chakra-ui/react"
import { BiLogoDiscord } from "react-icons/bi"

export default function DiscordWidget() {
  return (
    <IconButton icon={<BiLogoDiscord size='2em' />} isRound={true}></IconButton>
  )
}
