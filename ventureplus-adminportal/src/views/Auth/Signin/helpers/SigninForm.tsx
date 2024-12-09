import { useState } from "react";
import { LoginApi } from "../../../../services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { Divider, Form } from "antd";
import { TextInput } from "../../../../components";
import InputButton from "../../../../components/inputs/InputButton";

interface Props { };

const SignInForm = (props: Props) => {
    const dispatch: AppDispatch = useDispatch();
    const { loading } = useSelector((state: RootState) => state?.user);
    const onFinish = (values: any) => {
        let body = {
            email: values.email,
            password: values.password,
        };
        LoginApi(dispatch, body);
    };


    return (
        <div className="w-full sm:flex justify-center mt-[50px] sm:mt-[30px]">
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                className="w-full"
            >
                <div>
                    <span className="font-medium text-[.975rem] text-[#344054]">
                        Email
                    </span>
                    <TextInput
                        name="email"
                        placeholder="Enter your email"
                        rules={[{ required: true, message: "Please input your email!" }]}
                        className="w-full sm:w-[100%] h-[50px]  "
                    />
                </div>
                <div>
                    <span className="font-medium  text-[.975rem] text-[#344054]">
                        Password
                    </span>
                    <TextInput
                        name="password"
                        placeholder="Enter your password"
                        isPassword={true}
                        className="w-full sm:w-[100%] h-[50px]  "
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    />
                </div>
                <div className="mt-5">
                    <InputButton
                        className="w-full sm:w-[100%] h-[47px] bg-primary text-[#FFFFFF] text-[1rem] font-semibold"
                        loading={loading}
                        name="Login"
                        htmlType="submit"
                    />
                </div>
                <Divider />
            </Form>
        </div>
    );
};

export default SignInForm;
