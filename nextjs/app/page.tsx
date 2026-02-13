export default async function Page() {
    const test = await new Promise((res, rej) => {
        setTimeout(res, 1000);
    });

    return (
        <>
            <h1>Hello, Next.js</h1>
        </>
    )
}