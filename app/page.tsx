"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.target as HTMLFormElement);

          const jsonFile = fd.get("jsonFile");
          const imgFile = fd.get("imgFile");

          // console.log("In Action:");
          // console.log({
          //   jsonFile,
          //   jsonIsFile: jsonFile instanceof File,
          //   imgFile,
          //   imgIsFile: imgFile instanceof File,
          // });

          await fetch("http://localhost:3000/api/upload-file", {
            method: "POST",
            body: fd,
          });
        }}
      >
        <input type="file" name="jsonFile" accept="application/json" />
        <input type="file" name="imgFile" accept="image/*" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
