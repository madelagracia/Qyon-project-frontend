import { BasicLayout } from "../../shared/layouts/BasicLayout";
import { DetailsToolbar, SearchToolbar } from "../../shared/components";

export const Dashboard: React.FC = () => {

    return (
        <BasicLayout
            title='OFX Dashboard System'
            toolbar={(
            <SearchToolbar 
            showInputSearch
             />
            )}>
                 <DetailsToolbar/>
            Marcela
        </BasicLayout>
    );
}