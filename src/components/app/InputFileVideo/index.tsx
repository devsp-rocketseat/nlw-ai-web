import { FileVideo } from "lucide-react"

export function InputFileVideo() {
  return (
    <>
      <label
        htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        <FileVideo className="w-4 h-4" />
        Selecione um vídeo
      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" />
    </>
  )
}
