export default async function ProductPage({ params }: {
    params: Promise<{ id: string}>;
}) {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            <h1>Products detail page</h1>
        </div>
    )
}