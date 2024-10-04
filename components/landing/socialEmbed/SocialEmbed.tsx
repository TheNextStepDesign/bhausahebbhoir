import { Stack } from "@/components/layouts/Stacks";
import InstagramProfileEmbed from "./InstagramEmbed";
import YouTubeChannelEmbed from "./YouTubeEmbed";
import FacebookEmbed from "./FacebookEmbed";


export default function SocialEmbed() {
  return (
    <Stack  className="justify-center items-center gap-10 w-full py-10 bg-brand">
        <div>
          <InstagramProfileEmbed profileUrl="https://www.instagram.com/bhausahebbhoirofficial/" />
        </div>
        <div>
          <FacebookEmbed/>
        </div>
        <div>
          <YouTubeChannelEmbed/>
        </div>
    </Stack>

  )
}
