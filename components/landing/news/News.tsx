import Body from "@/components/layouts/Body";

export default function News() {
  return (
    <Body>

        <div className="flex flex-row flex-wrap gap-5 justify-center" >
            {
                Array(6).fill(0).map((_, index) => (
                    <div key={index} className="w-[300px] md:w-[350px] h-[300px] bg-slate-400 flex justify-center items-center rounded-xl"  >
                        <h1>News {index}</h1>
                    </div>
                ))
            }
        </div>

    </Body>
  )
}
