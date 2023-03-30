import { BasicLayout } from "../../shared/layouts/BasicLayout";
import { DetailsToolbar, SearchToolbar } from "../../shared/components";
import { OfxList } from "../ofx/OfxList";

export const Dashboard: React.FC = () => {

    return (
        <BasicLayout
            title='OFX Dashboard System'
            toolbar={(
                <SearchToolbar
                    showInputSearch
                />
               
            )}>
            <DetailsToolbar />
            
        </BasicLayout>

    );
}