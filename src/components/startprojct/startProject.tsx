import * as React from "react";
import { Layout } from "../../common/layout/layout.component";
import { Container } from '@mui/system';
import { Category } from './category.startproject.component';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const StartProject: React.FC = () => {
    return <Layout>
        <Container maxWidth="xl" >
            <div className="flex justify-between w-[90%] mx-auto max-[600px]:flex-col " >
                <div className="w-[70%] max-[600px]:w-[100%] " >
                    <h1 className="text-[40px]" >Начать проект
                    </h1>
                    <Category />
                    <div className="mt-[20px] max-[600px]:flex-col flex items-center justify-between" >
                    <TextField fullWidth sx={{mr: 1}} label="Имя" variant="outlined" />
                    <TextField fullWidth label="Телефон" variant="outlined" />
                    </div>
                    <Button variant="contained" fullWidth sx={{mt: 2, padding: "10px"}} >Отправить</Button>
                </div>
                <div className="w-[30%] max-[600px]:w-[100%] " >
                    <h1 className="text-[40px]" >Офис
                    </h1>
                    <p className="mt-[14px]" >Душанбе, пр. Рудаки 93/1
                        (+992) 111-111-789
                        info@gravity.tj</p>
                </div>
            </div>
        </Container>
    </Layout>;
};
