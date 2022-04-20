import Mobile from 'mobile/src/App';
import Funnel from 'Funnel/src/App';
import { Button } from 'components'

const FunnelView = () => {
    return (
        <>
        Jag är /funnel i next appen
        <Funnel />
        <Mobile />
        <Button>En knapp från components i nextjs</Button>
        </>
    )
}

export default FunnelView;
