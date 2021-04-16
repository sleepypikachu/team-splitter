import Share from '../components/share'

export default function SharePage({teams}) {
    return <Share teams={teams}/>
}

export async function getServerSideProps(context) {
    console.log(context)
    const teamQueryParam = context.query.teams;

    if (!teamQueryParam) {
        return {
            redirect: {
            destination: '/',
            permanent: false
        }}
    }

    const teams = JSON.parse(decodeURIComponent(teamQueryParam))

    return {
       props: {teams}
    }
} 