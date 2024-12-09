import { Form, Input } from "antd";
const FormProfile = ({ form,role,pastExperience }: any) => {
  return (
    <div className="mr-2 mt-14">
    <Form name="submit" layout="vertical" form={form} disabled>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2"> 
        <Form.Item name={"email"} label="Email">
          <Input className="w-full md:mr-4 md:w-96 p-2 md:p-4" />
        </Form.Item>
  
        <Form.Item name={"phone"} label="Phone Number">
          <Input
            className="w-80 text-gray-500 md:w-96 p-2 md:p-4"
          
          />
        </Form.Item>
  
        <Form.Item name={"whatsapp_no"} label="Whatsapp Number">
          <Input
            className="w-80 text-gray-500 md:w-96 p-2 md:p-4"
            
          />
        </Form.Item>
  
        <Form.Item name={"cnic"} label="CNIC">
          <Input
            type="number"
            className="w-80  text-gray-500 md:w-96 p-2 md:p-4"
           
          />
        </Form.Item>
  
        {role === "agentOwner" && (
          <>
            <Form.Item name={"agencyName"} label="Agency Name">
              <Input
                className="w-80 md:w-96 text-gray-500 p-2"
                
              />
            </Form.Item>
  
            <Form.Item name={"dob"} label="DOB" >
              <Input 
                className="w-80 md:w-96 text-gray-500 p-2 md:p-4"
              
              />
            </Form.Item>
            <Form.Item label="Pin Code" name={"pinCode"}>
              <Input
                className="w-80 md:w-96 text-gray-500 p-2 md:p-4"
               
              />
            </Form.Item>
          
             
            <Form.Item label="About Me" name={'shortDescription'}>
              <Input.TextArea 
                className="w-80 md:w-96 text-gray-500 p-2 md:p-4"
               
              />
            </Form.Item>
          </>
        )}
          <div className="bg-gray-100  text-gray-400 rounded-lg md:w-96 md:h-14 p-4 md:p-4 ">
            <p >Past Experiance (if any)</p>
             <p>{pastExperience}</p>
            </div>
      </div>
    </Form>
  </div>
  
  );
};

export default FormProfile;
