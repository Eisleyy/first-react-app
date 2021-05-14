import Layout from '../components/Layout';
export default function Home() {
    return (
        <Layout title="UUID Converter">
            <h1 className="text-4xl text-white mb-8 text-center ">The UUID converter</h1>
            <input className="rounded bg-white py-3" placeholder="Insert UUID"></input>
        </Layout>
    );
}