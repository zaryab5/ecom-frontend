// import { Variants, motion } from "framer-motion";

// const Example = () => {
//   return (
//     <div className="grid place-content-center bg-violet-600 px-4 py-24">
//       <BarLoader />
//     </div>
//   );
// };

// const variants = {
//   initial: {
//     scaleY: 0.5,
//     opacity: 0,
//   },
//   animate: {
//     scaleY: 1,
//     opacity: 1,
//     transition: {
//       repeat: Infinity,
//       repeatType: "mirror",
//       duration: 1,
//       ease: "circIn",
//     },
//   },
// } as Variants;

// const BarLoader = () => {
//   return (
//     <motion.div
//       transition={{
//         staggerChildren: 0.25,
//       }}
//       initial="initial"
//       animate="animate"
//       className="flex gap-1"
//     >
//       <motion.div variants={variants} className="h-12 w-2 bg-white" />
//       <motion.div variants={variants} className="h-12 w-2 bg-white" />
//       <motion.div variants={variants} className="h-12 w-2 bg-white" />
//       <motion.div variants={variants} className="h-12 w-2 bg-white" />
//       <motion.div variants={variants} className="h-12 w-2 bg-white" />
//     </motion.div>
//   );
// };

// export default Example;


const Loader = () => {
  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="/imgs/random/11.jpg"
      />
    </div>
  );
};

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}: {
  height: string;
  background: string;
  imgUrl: string;
}) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          // backgroundImage: `url(${imgUrl})`,
          backgroundColor:"black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loader;
