import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ShadowSkeleton(length, maxWidth) {
  return (
    <div>
      {Array.from({ length: length }, (_, index) => (
        <div
          key={index}
          style={{
            marginTop: "30px",
            maxWidth: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Skeleton height={40} count={3} style={{ marginBottom: "5px" }} />
        </div>
      ))}
    </div>
  );
}
export default ShadowSkeleton;
