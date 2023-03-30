import { BasicLayout } from "../../shared/layouts/BasicLayout";
import { ToolbarDashboard } from "../../shared/components";

export const Dashboard: React.FC = () => {

    return (
        <BasicLayout
         title='OFX Dashboard System' 
         toolbar={(
            <ToolbarDashboard 
            showInputSearch
             />
                
         )}>
            Marcela
        </BasicLayout>
    );
}