
// interface videoProps{
//   videoURL:string
//   width:number
//   height:number
// }

const Video = () => {
  return (
    <video
     className="mx-auto rounded-xl"
     src="../../public/sample-video.mp4" controls autoPlay width={800} height={800}></video>
  )
}

export default Video