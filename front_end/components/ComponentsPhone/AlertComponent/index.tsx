import { useMutationPostTaskCompleted } from "@/services/handler/muation";
import { patchTaskCompleted } from "@/services/handler/task_handler"
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, CloseButton, Flex, FormControl, Toast, useDisclosure, useToast } from "@chakra-ui/react"
import { Form, Formik } from "formik";
import { useState } from "react";
import { useMutation } from "react-query"

interface Props {
  taskId: string;
  name: string;
}



const AlertComponent = ({ taskId, name }: Props) => {
  const toast = useToast()
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  const mutation = useMutationPostTaskCompleted()
  function postCompleted() {
    mutation.mutate({ id: taskId, status: true })
  }
  return isVisible ? (
    <Alert status='success'>
      <Box>
        <AlertTitle>Success in the task {name}</AlertTitle>
        <AlertDescription>
          Your time has expired. Do you want to complete the task or restart it?
        </AlertDescription>
        <Center>
          <Flex>
            <Button
              mt={4}
              margin="0.1vw"
              backgroundColor="red.700"
              colorScheme='red'
              textColor="white"
              type='submit'
              onClick={onClose}
            >Restart</Button>
            <Formik
              initialValues={{ id: '', status: false }}
              onSubmit={postCompleted}

            >
              {(props) => (
                <Form key={taskId}>
                  <FormControl>

                    <Button
                      mt={4}
                      margin="0.1vw"
                      backgroundColor="green.700"
                      colorScheme='green'
                      textColor="white"
                      type='submit'
                      onClick={onClose}
                    >Finalize</Button>
                  </FormControl>
                </Form>
              )}
            </Formik>
          </Flex>
        </Center>

      </Box >

    </Alert >
  ) : (
    <></>
  )
}

export default AlertComponent