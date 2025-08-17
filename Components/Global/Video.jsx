import { Pause, Play, Volume2, VolumeOff } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import moment from "moment"
import { motion } from "framer-motion"
const Video = (
    {
        parentClassName = "",
        src = "",
        className = ""
    }
) => {
    const VideoRef = useRef();
    const [videoPlaying, setvideoPlaying] = useState(false);
    const [videoMuted, setvideoMuted] = useState(false);
    const [videoDuration, setvideoDuration] = useState(0);
    const [videoCurrentTime, setvideoCurrentTime] = useState(0);

    const HandelToggleVideoPLaying = (e) => {
        setvideoPlaying(pv => {
            if (pv) {
                e.target.pause()
            }
            else {
                e.target.play()
            }
            return !pv
        })
    }




    useEffect(() => {
        if (VideoRef.current) {
            setvideoDuration(VideoRef.current.duration)
        }
    }, []);

    let inter1;
    useEffect(() => {
        if (videoPlaying) {

            inter1 = setInterval(() => {
                setvideoCurrentTime(VideoRef.current?.currentTime)

            }, 500);
        }



        return () => {
            clearInterval(inter1)
        }
    }, [videoPlaying, videoDuration])
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };


    return (
        <div className={`${parentClassName} group text-white flex items-center justify-center  relative`}>
            <video
                ref={VideoRef}
                className={className}
                src={src}
                muted={videoMuted}
                onLoadedMetadata={(e) => {
                    setvideoDuration(e.target.duration)
                }}
                onEnded={(e) => {
                    e.target.currentTime = 0;
                    setvideoPlaying(false)
                    setvideoCurrentTime(0)
                }}
                onClick={HandelToggleVideoPLaying}
            ></video>
            {
                videoPlaying
                    ? <motion.div
                        initial={{
                            opacity: 1,
                            scale: 1
                        }}
                        animate={{
                            opacity: 0,
                            scale: .65,
                            transition: {
                                delay: 1
                            }
                        }}
                        className="absolute rounded-full p-4 bg-foreground/50 "
                    >
                        <Pause
                            className='w-7 h-7 fill-white stroke-3'
                        />
                    </motion.div>
                    :
                    <motion.div
                        initial={{
                            opacity: .5,
                            scale: .95
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,

                        }}
                        className="absolute rounded-full p-4 bg-foreground/50 "
                    >

                        <Play
                            className='w-7 h-7  fill-white stroke-3'
                        />
                    </motion.div>
            }

            <div className="absolute  px-4 gap-2  text-white flex justify-between items-center   bottom-2 p-2  bg-foreground/40 rounded-sm w-10/12">
                <div className=""
                    onClick={()=>VideoRef.current?.click()}
                >
                    {
                        videoPlaying
                            ? <div className="">
                                <Pause className='w-5 h-5 stroke-3' />
                            </div>
                            : <Play className='w-5 h-5  stroke-3' />
                    }
                </div>
                <h2 className='text-xs'>{moment(videoCurrentTime * 1000).format("mm:ss")}</h2>
                <div className="w-10/12 bg-white h-[3]">
                    <div
                        style={{
                            width: `${(videoCurrentTime / videoDuration) * 100}%`
                        }}
                        className="bg-gold h-full"></div>
                </div>
                <h2 className='text-xs'>{formatTime(videoDuration)}</h2>
                <div className="cursor-pointer"
                    onClick={() => setvideoMuted(pv => !pv)}
                >

                    {
                        videoMuted
                            ? <VolumeOff className='w-5 h-5  stroke-3' />
                            : <Volume2 className='w-5 h-5  stroke-3' />
                    }
                </div>
            </div>
        </div>
    )
}

export default Video
