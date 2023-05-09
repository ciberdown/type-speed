export default function WritingArea({
  rndStr,
  writingSection,
}: {
  rndStr: string;
  writingSection: string;
}) {
  return (
    <div
      style={{
        minHeight: "30px",
        backgroundColor: "white",
        height: "auto",
        width: "100%",
        marginTop: "20px",
        padding: "10px",
        borderRadius: "10px",
        display: "inline-block"
      }}
    >
      {writingSection}
    </div>
  );
}
