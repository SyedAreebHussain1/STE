import { Button, Checkbox, Col, Divider, Form, Modal, Row, Select } from 'antd'
import InputLabel from '../../../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../../../utils/components/InputFields/NumberField'
import {
  calculateAmount,
  calculatePercentage,
  formatBytes,
} from '../../../../../../utils/utils'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  createPropertyWalletProductStep3SaveTempleteApi,
  updatePropertyWalletProductStep3TempleteApi,
} from '../../../../../../redux/api/SingleProperty'
import pdfIcon from '../../../../../assest/icon/pdfIcon.png'

import CheckboxField from '../../../../../../utils/components/InputFields/CheckboxField'
import { errorMessage } from '../../../../../../utils/message'
import { useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { SelectField } from '../../../../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../../../../utils/hooks/useUpload'
import Upload from '../../../../../../utils/components/Upload/Upload'
import { uploadTemplatePdfApi } from '../../../../../../redux/api/Project/ProjectInventory'
import DocumentPreviewer from '../../../../../../utils/components/Upload/DocumentPreviewer'
import { clearUploadTemplatePdf } from '../../../../../../redux/slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import CustomTokenAmount from '../../../../../../utils/components/PaymentPlan/CustomTokenAmount'

const EditPaymentPlanModal = ({ visible, toggleAdd, data }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  function changeSelectedOptions(value) {
    setSelectedOptions(value)
  }
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile, , filesCountLegal] =
    useUpload()
  const dispatch = useDispatch()
  const [form] = useForm()
  const uploadTemplatePdf = useSelector((state) => state.uploadTemplatePdf)
  // const [templateCheck, setTemplateCheck] = useState(false)
  let [noOfMonthState, setNoOfMonthState] = useState(null)
  let [element, setElement] = useState([])
  const [size, setSize] = useState('middle')
  let [isBalloon, setIsBalloon] = useState(false)
  const [percentages, setPercentages] = useState({})
  let [renderMinimumPrice, setRenderMinimumPrice] = useState()
  let [ballonAtDisable, setBallonAtDisable] = useState(false)

  const createPrice = useSelector(
    (state) => state.createPropertyWalletProductStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updatePropertyWalletProductStepOne
  )
  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price

  useEffect(() => {
    if (data.length > 0 && visible) {
      setState({
        discountPercentage: data[0].discountPercentage,
        // discountAmount: data[0].discountAmount,
        OnBookingPercentage: data[0].OnBookingPercentage,
        OnBookingAmount: data[0].OnBookingAmount,
        // minimumPrice: data[0].minimumPrice,
        commissionPercentage: data[0].commissionPercentage,
        spCommissionPercentage: data[0].spCommissionPercentage,
        lgCommissionPercentage: data[0].lgCommissionPercentage,
        OnPossessionPercentage: data[0].OnPossessionPercentage,
        OnPossessionAmount: data[0].OnPossessionAmount,
        plan: data[0].plan,
        title: data[0].title,
        token: data[0].token,
        noOfMonths: data[0].noOfMonths,
        installmentPercentage: data[0].installmentPercentage,
        installmentAmount: data[0].installmentAmount,
        startingMonth: data[0].installmentStartDuration,
      })
      form.setFieldsValue({
        discountPercentage: data[0].discountPercentage,
        discountAmount: data[0].discountAmount,
        OnBookingPercentage: data[0].OnBookingPercentage,
        OnBookingAmount: data[0].OnBookingAmount,
        // minimumPrice: data[0].minimumPrice,
        commissionPercentage: data[0].commissionPercentage,
        spCommissionPercentage: data[0].spCommissionPercentage,
        lgCommissionPercentage: data[0].lgCommissionPercentage,
        OnPossessionPercentage: data[0].OnPossessionPercentage,
        OnPossessionAmount: data[0].OnPossessionAmount,
        plan: data[0].plan,
        title: data[0].title,
        token: data[0].token,
        noOfMonths: data[0].noOfMonths,
        installmentPercentage: data[0].installmentPercentage,
        installmentAmount: data[0].installmentAmount,
        startingMonth: data[0].installmentStartDuration,
      })

      if (data[0].isBaloon) {
        setState((prev) => ({
          ...prev,
          balloonIndex: data[0]?.balloonIndex
            ?.replace(/[{}'"]/g, '')
            ?.split(','),
          BalloonAt: data[0]?.BalloonAt,
          BalloonPercentage: data[0].BalloonPercentage,
          BalloonAmount: data[0].BalloonAmount,
        }))
        setIsBalloon(data[0].isBaloon)
        form.setFieldsValue({
          balloonIndex: data[0]?.balloonIndex
            ?.replace(/[{}'"]/g, '')
            ?.split(','),
          BalloonAt: data[0]?.BalloonAt,
          BalloonPercentage: data[0].BalloonPercentage,
          BalloonAmount: data[0].BalloonAmount,
        })
      }
    }
  }, [data?.data, visible])

  const [state, setState] = useState({
    discountAmount: 0,
    OnBookingAmount: 0,
    installmentAmount: 0,
    OnPossessionAmount: 0,
    BalloonAmount: 0,
  })
  const [body, setBody] = useState({
    propertyWalletProductId: '',
    updatePropertyWalletProductInstallmentPaymentPlanDto: {
      plan: '',
      title: '',
      token: 0,
      noOfMonths: 0,
      discountAmount: 0,
      discountPercentage: 0,
      commissionPercentage: 0,
      spCommissionPercentage: 0,
      // commissionAmount: 0,
      OnBookingPercentage: 0,
      OnBookingAmount: 0,
      installmentPercentage: 0,
      installmentAmount: 0,
      OnPossessionPercentage: 0,
      OnPossessionAmount: 0,
      isBaloon: isBalloon,
      BalloonPercentage: 0,
      BalloonAmount: 0,
      BalloonAt: 0,
      balloonIndex: '',
      minimumPrice: 0,
    },
  })

  useEffect(() => {
    setBody({
      ...body,
      propertyWalletProductId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
    })
  }, [updatePrice, createPrice])
  useEffect(() => {
    // if (state.discountAmount > 0) {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)

    // }
  }, [state.discountAmount, visible])
  useEffect(() => {
    form.setFieldValue('sellingPrice', sellingPrice)
  }, [visible, sellingPrice])
  useEffect(() => {
    let array = []
    for (
      let index = 1;
      index <=
      body.updatePropertyWalletProductInstallmentPaymentPlanDto.noOfMonths;
      index++
    ) {
      array.push(index)
    }
    setElement(array)
  }, [body.updatePropertyWalletProductInstallmentPaymentPlanDto.noOfMonths])

  useEffect(() => {
    let array = []
    if (noOfMonthState) {
      for (let index = 1; index <= noOfMonthState; index++) {
        array.push(index)
      }
    } else {
      for (let index = 1; index <= state?.noOfMonths; index++) {
        array.push(index)
      }
    }
    setElement(array)
  }, [state.noOfMonths, noOfMonthState])
  const dropDownChange = () => {
    form.setFieldValue('noOfMonths', undefined)
    form.setFieldValue('commissionPercentage', undefined)
    form.setFieldValue('spCommissionPercentage', undefined)
    form.setFieldValue('lgCommissionPercentage', undefined)
    form.setFieldValue('OnBookingPercentage', undefined)
    form.setFieldValue('OnBookingAmount', undefined)
    form.setFieldValue('installmentPercentage', undefined)
    form.setFieldValue('OnPossessionPercentage', undefined)
    form.setFieldValue('OnPossessionAmount', undefined)
    setState({
      // discountPercentage: '',
      // discountAmount: data[0].discountAmount,
      OnBookingPercentage: '',
      OnBookingAmount: '',
      commissionPercentage: '',
      spCommissionPercentage: '',
      lgCommissionPercentage: '',
      OnPossessionPercentage: '',
      OnPossessionAmount: '',
      plan: '',
      title: '',
      token: '',
      noOfMonths: '',
      installmentPercentage: '',
      installmentAmount: '',
    })
    setElement([])
    // setIsBalloon(false)
    form.getFieldValue().balloonIndex = []
    form.getFieldValue().commissionPercentage = ''
    form.getFieldValue().spCommissionPercentage = ''
    form.getFieldValue().OnBookingPercentage = ''
    form.getFieldValue().lgCommissionPercentage = ''
    form.getFieldValue().OnBookingAmount = ''
    form.getFieldValue().OnPossessionPercentage = ''
    form.getFieldValue().installmentPercentage = ''
    form.getFieldValue().OnPossessionAmount = ''
  }
  const percentageAmoutClear = () => {
    form.setFieldValue('OnBookingPercentage', undefined)
    form.setFieldValue('OnBookingAmount', undefined)
    form.setFieldValue('installmentPercentage', undefined)
    form.setFieldValue('installmentAmount', undefined)
    form.setFieldValue('OnPossessionPercentage', undefined)
    form.setFieldValue('OnPossessionAmount', undefined)
    form.setFieldValue('BalloonPercentage', undefined)
    form.setFieldValue('BalloonAmount', undefined)
    form.setFieldValue('BalloonAt', undefined)
    form.setFieldValue('balloonIndex', [])

    form.setFieldsValue({
      OnBookingPercentage: '',
      OnBookingAmount: '',
      installmentPercentage: null,
      installmentAmount: '',
      OnPossessionPercentage: '',
      OnPossessionAmount: '',
      BalloonPercentage: '',
      BalloonAmount: '',
      BalloonAt: '',
      balloonIndex: [],
    })
    setState({
      OnBookingPercentage: '',
      OnBookingAmount: '',
      installmentPercentage: null,
      installmentAmount: '',
      OnPossessionPercentage: '',
      OnPossessionAmount: '',
      BalloonPercentage: '',
      BalloonAmount: '',
      BalloonAt: '',
      balloonIndex: [],
    })

    // form.setFieldsValue({
    //     OnBookingPercentage:
    //         null,
    //     OnBookingAmount: null,
    //     installmentPercentage:
    //         null,
    //     installmentAmount: null,
    //     OnPossessionPercentage:
    //         null,
    //     OnPossessionAmount:
    //         null,
    // })
    // setState({
    //     OnBookingAmount: null,
    //     OnPossessionAmount: null,
    //     installmentAmount: null,
    //     balloonIndex: [],
    //     BalloonAt: null
    // })
  }
  useEffect(() => {
    setBallonAtDisable(true)
  }, [visible])
  useEffect(() => {
    const formData = new FormData()
    if (legalPdf.length > 0) {
      formData.append(`pdf`, legalPdf[0])
      uploadTemplatePdfApi(dispatch, formData)
    }
  }, [legalPdf])
  const onFinish = (e) => {
    if (selectedOptions.length === 0) {
      errorMessage('Select atleast 1 token amount')
      return
    }
    const body = {
      propertyWalletProductId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
      updatePropertyWalletProductInstallmentPaymentPlanDto: {
        title: e.title,
        tokenAmount: selectedOptions.map((item) => Number(item)),
        url: uploadTemplatePdf?.data?.data || data?.[0]?.url,
        plan: e.plan,
        noOfMonths: noOfMonthState ? noOfMonthState : data[0].noOfMonths,
        discountAmount: Number(e.discountAmount),
        discountPercentage: Number(e.discountPercentage),
        commissionPercentage: Number(e.commissionPercentage),
        spCommissionPercentage: Number(e.spCommissionPercentage),
        lgCommissionPercentage: Number(e.lgCommissionPercentage),
        OnBookingPercentage: Number(e.OnBookingPercentage),
        OnBookingAmount: Number(e.OnBookingAmount),
        installmentPercentage: Number(e.installmentPercentage),
        installmentAmount: Number(e.installmentAmount),
        OnPossessionPercentage: Number(e.OnPossessionPercentage),
        OnPossessionAmount: Number(e.OnPossessionAmount),
        isBaloon: isBalloon,
        minimumPrice: Number(e.minimumPrice),
        installmentStartDuration: e.startingMonth,
      },
    }
    if (isBalloon) {
      body.updatePropertyWalletProductInstallmentPaymentPlanDto.BalloonPercentage =
        Number(e.BalloonPercentage)
      body.updatePropertyWalletProductInstallmentPaymentPlanDto.BalloonAmount =
        Number(e.BalloonAmount)
      body.updatePropertyWalletProductInstallmentPaymentPlanDto.BalloonAt =
        Number(e.BalloonAt)
      body.updatePropertyWalletProductInstallmentPaymentPlanDto.balloonIndex =
        e.balloonIndex
    }
    let sum = 0
    const obj = e
    // for (const property in obj) {
    //     if (property.includes('Percentage') && property !== 'discountPercentage' && property !== 'commissionPercentage' && ) {
    //         sum += Number(obj[property])
    //     }
    // }
    for (const property in body.updatePropertyWalletProductInstallmentPaymentPlanDto) {
      if (
        property.includes('Percentage') &&
        property !== 'discountPercentage' &&
        property !== 'commissionPercentage' &&
        property !== 'spCommissionPercentage' &&
        property !== 'lgCommissionPercentage'
      ) {
        sum +=
          body.updatePropertyWalletProductInstallmentPaymentPlanDto[property]
      }
    }
    if (sum < 100 || sum > 100) {
      errorMessage('Percentage should equal to 100')
      return
    }
    updatePropertyWalletProductStep3TempleteApi(
      dispatch,
      body,
      data[0].id,
      onSuccess
    )
    setBallonAtDisable(false)
  }
  function onSuccess() {
    dispatch(clearUploadTemplatePdf())
    deleteFile(pdfPreviews?.[0]?.name)
    toggleAdd()
    form.resetFields()
    setIsBalloon(false)
    setNoOfMonthState(null)
    setBallonAtDisable(false)
    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
  }
  function onCancel() {
    dispatch(clearUploadTemplatePdf())
    deleteFile(pdfPreviews?.[0]?.name)
    toggleAdd()
    form.resetFields()
    setPercentages({})
    setBallonAtDisable(false)
    setNoOfMonthState(null)
    setIsBalloon(false)

    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
  }

  useEffect(() => {
    const discountAmount = calculateAmount(
      sellingPrice,
      state?.discountPercentage
    )
    const minimumPrice = sellingPrice - discountAmount
    const OnBookingAmount = calculateAmount(
      sellingPrice,
      state?.OnBookingPercentage
    )
    const installmentAmount = calculateAmount(
      sellingPrice,
      state?.installmentPercentage
    )
    const OnPossessionAmount = calculateAmount(
      sellingPrice,
      state?.OnPossessionPercentage
    )
    const BalloonAmount = calculateAmount(
      sellingPrice,
      state?.BalloonPercentage
    )

    form.setFieldsValue({
      discountAmount: discountAmount,
      minimumPrice: minimumPrice,
      OnBookingAmount: OnBookingAmount,
      installmentAmount: installmentAmount,
      OnPossessionAmount: OnPossessionAmount,
      BalloonAmount: BalloonAmount,
    })
    setState((prev) => ({
      ...prev,
      discountAmount: discountAmount,
      minimumPrice: minimumPrice,
      OnBookingAmount: OnBookingAmount,
      installmentAmount: installmentAmount,
      OnPossessionAmount: OnPossessionAmount,
      BalloonAmount: BalloonAmount,
    }))
  }, [
    visible,
    isBalloon,
    renderMinimumPrice,
    sellingPrice,
    state.discountPercentage,
    createPrice,
    updatePrice,
  ])
  return (
    <Modal
      width={'817px'}
      title={
        <h3 className="text-[18px] font-semibold">Edit Installment Template</h3>
      }
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered={true}
    >
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%' }} bordered={false}>
          <Form
            name="normal_login"
            form={form}
            // className="login-form"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Row gutter={16}>
              <Col lg={8} xs={24}>
                <InputLabel>Template Name</InputLabel>
                <TextField
                  onChange={(e) =>
                    setBody({
                      ...body,
                      updatePropertyWalletProductInstallmentPaymentPlanDto: {
                        ...body.updatePropertyWalletProductInstallmentPaymentPlanDto,
                        title: e.target.value,
                      },
                    })
                  }
                  placeholder="Name"
                  name="title"
                />
              </Col>

              <Col lg={8} xs={24}>
                <InputLabel>Starting Month</InputLabel>
                <NumberField
                  onChange={(e) =>
                    setBody({
                      ...body,
                      updatePropertyWalletProductInstallmentPaymentPlanDto: {
                        ...body.updatePropertyWalletProductInstallmentPaymentPlanDto,
                        startingMonth: e.target.value,
                      },
                    })
                  }
                  name="startingMonth"
                />
              </Col>

              <Col lg={8} xs={24}>
                <InputLabel>No of Months</InputLabel>
                <NumberField
                  onChange={(e) => {
                    // setBody({
                    //     ...body,
                    //     updatePropertyWalletProductInstallmentPaymentPlanDto:
                    //     {
                    //         ...body.updatePropertyWalletProductInstallmentPaymentPlanDto,
                    //         noOfMonths: Number(
                    //             e.target.value
                    //         ),
                    //     },
                    // })
                    if (e) {
                      form.setFieldsValue({
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                      setBallonAtDisable(true)
                    }
                    setNoOfMonthState(
                      form.getFieldsValue().plan === 'quarterly'
                        ? Math.round(Number(e.target.value / 3))
                        : Number(e.target.value)
                    )
                  }}
                  name="noOfMonths"
                />
              </Col>
            </Row>
            <Row gutter={16} className="mb-[10px]">
              <Col lg={12} xs={24}>
                <div className="mb-[10px]">
                  {' '}
                  <InputLabel>Document</InputLabel>
                </div>
                <Upload
                  name="legalPdfProductEdit"
                  files={legalPdf}
                  setFiles={setLegalPdf}
                  supportedFileTypes={['pdf', 'jpg', 'jpeg', 'png']}
                  supportedText={'Files Supported PDF, JPG, JPEG, PNG'}
                  // multiple={true}
                  // fileLimit={1}
                  fileUploadLimit={5}
                  filesCount={filesCountLegal}
                />
              </Col>
              <Col>
                <div className="max-h-[369px] overflow-y-auto">
                  {pdfPreviews && pdfPreviews.length > 0 ? (
                    <DocumentPreviewer
                      fileName={pdfPreviews[0].name?.split('-')[1]}
                    />
                  ) : (
                    <DocumentPreviewer
                      fileName={data[0].url?.split('/').at(-1).split('-')[1]}
                      // fileSize={formatBytes(data[0].size)}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col lg={24} xs={24}>
                <InputLabel>Plan</InputLabel>
                <SelectField
                  name="plan"
                  required={false}
                  options={[
                    {
                      value: 'monthly',
                      label: 'Monthly',
                    },
                    {
                      value: 'quarterly',
                      label: 'Quarterly',
                    },
                    {
                      value: 'balloon',
                      label: 'Balloon',
                    },
                  ]}
                  onChange={(e) => {
                    setPercentages({})
                    dropDownChange()
                    setRenderMinimumPrice(e)
                    setBallonAtDisable(false)

                    if (e === 'balloon') {
                      setIsBalloon(true)
                      form.setFieldsValue({
                        OnBookingPercentage: null,
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        OnPossessionPercentage: null,
                        installmentAmount: null,
                        installmentPercentage: null,
                        BalloonPercentage: null,
                        BalloonAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                      setState({
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        installmentAmount: null,
                        BalloonAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                    } else {
                      setIsBalloon(false)
                      setBallonAtDisable(true)
                      form.setFieldsValue({
                        OnBookingPercentage: null,
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        OnPossessionPercentage: null,
                        installmentAmount: null,
                        installmentPercentage: null,
                        discountAmount: null,
                        discountPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                      setState({
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        installmentAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                    }
                  }}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <InputLabel>Discount</InputLabel>
                <Row gutter={16}>
                  <Col xs={24} lg={6}>
                    <NumberField
                      onChange={(e) => {
                        // dropDownChange()
                        // percentageAmoutClear();

                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'discountPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          sellingPrice,
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          discountAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          discountAmount: calculatedAmount,
                          discountPercentage: Number(e.target.value),
                        }))
                        // if (isBalloon) {
                        //     form.setFieldsValue({
                        //         OnBookingPercentage:
                        //             null,
                        //         OnBookingAmount: null,
                        //         installmentPercentage:
                        //             null,
                        //         installmentAmount: null,
                        //         OnPossessionPercentage:
                        //             null,
                        //         OnPossessionAmount:
                        //             null,
                        //         BalloonPercentage: null,
                        //         BalloonAmount: null,
                        //         BalloonAt: null,
                        //         balloonIndex: [],
                        //     })
                        // } else {
                        //     form.setFieldsValue({
                        //         OnBookingPercentage:
                        //             null,
                        //         OnBookingAmount: null,
                        //         installmentPercentage:
                        //             null,
                        //         installmentAmount: null,
                        //         OnPossessionPercentage:
                        //             null,
                        //         OnPossessionAmount:
                        //             null,
                        //     })
                        // }
                      }}
                      placeholder="Percentage"
                      name="discountPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={18}>
                    <NumberField
                      // onChange={(e) => setBody({ ...body, discountAmount: e.target.value })}
                      onChange={(e) => {
                        // dropDownChange()

                        if (Number(e.target.value) > sellingPrice) {
                          e.target.value = sellingPrice
                          form.setFieldValue('discountAmount', e.target.value)
                        }
                        form.setFieldsValue({
                          discountPercentage: calculatePercentage(
                            sellingPrice,
                            Number(e.target.value)
                          ),
                        })
                        setState((prev) => ({
                          ...prev,
                          discountAmount: Number(e.target.value),
                        }))
                        if (isBalloon) {
                          form.setFieldsValue({
                            OnBookingPercentage: null,
                            OnBookingAmount: null,
                            installmentPercentage: null,
                            installmentAmount: null,
                            OnPossessionPercentage: null,
                            OnPossessionAmount: null,
                            BalloonPercentage: null,
                            BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          form.setFieldsValue({
                            OnBookingPercentage: null,
                            OnBookingAmount: null,
                            installmentPercentage: null,
                            installmentAmount: null,
                            OnPossessionPercentage: null,
                            OnPossessionAmount: null,
                          })
                        }
                      }}
                      placeholder="Amount"
                      name="discountAmount"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <InputLabel>Minimum Price</InputLabel>
                <NumberField disabled name="minimumPrice" />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <CustomTokenAmount
                  selectedOptions={selectedOptions}
                  setSelectedOptions={changeSelectedOptions}
                  optionsPrev={data?.[0]?.propertyWalletProductInstallmentToken?.map(
                    (item) => item.token
                  )}
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <InputLabel>Commission</InputLabel>
                <NumberField
                  // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('commissionPercentage', e.target.value)
                    }
                    const calculatedAmount = calculateAmount(
                      sellingPrice,
                      Number(e.target.value)
                    )
                    form.setFieldsValue({
                      commissionAmount: calculatedAmount,
                    })
                    setState((prev) => ({
                      ...prev,
                      commissionAmount: calculatedAmount,
                      commissionPercentage: Number(e.target.value),
                    }))
                  }}
                  placeholder="Percentage"
                  name="commissionPercentage"
                />
              </Col>{' '}
              <Col xs={24} lg={12}>
                <InputLabel>Sale Point Commission</InputLabel>
                <NumberField
                  // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'spCommissionPercentage',
                        e.target.value
                      )
                    }
                    // const calculatedAmount = calculateAmount(
                    //   sellingPrice,
                    //   Number(e.target.value)
                    // );
                    // form.setFieldsValue({
                    //   commissionAmount: calculatedAmount,
                    // });
                    setState((prev) => ({
                      ...prev,
                      // commissionAmount: calculatedAmount,
                      spCommissionPercentage: Number(e.target.value),
                    }))
                  }}
                  placeholder="Percentage"
                  name="spCommissionPercentage"
                />
              </Col>
              <Col xs={24} lg={24}>
                <InputLabel>Lounges Commission</InputLabel>
                <NumberField
                  // onChange={(e) => setBody({ ...body, commissionPercentage: e.target.value })}
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'lgCommissionPercentage ',
                        e.target.value
                      )
                    }
                    // const calculatedAmount = calculateAmount(
                    //   sellingPrice,
                    //   Number(e.target.value)
                    // );
                    // form.setFieldsValue({
                    //   commissionAmount: calculatedAmount,
                    // });
                    setState((prev) => ({
                      ...prev,
                      // commissionAmount: calculatedAmount,
                      lgCommissionPercentage: Number(e.target.value),
                    }))
                  }}
                  placeholder="Percentage"
                  name="lgCommissionPercentage"
                />
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} lg={24}>
                <InputLabel>On Booking</InputLabel>
                <Row gutter={16}>
                  <Col xs={24} lg={6}>
                    <NumberField
                      // onChange={(e) => setBody({ ...body, OnBookingPercentage: e.target.value })}
                      placeholder="Percentage"
                      name="OnBookingPercentage"
                      onChange={(e) => {
                        setPercentages((prev) => ({
                          ...prev,
                          OnBookingPercentage: e.target.value,
                        }))
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'OnBookingPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          form.getFieldValue('sellingPrice'),
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          OnBookingAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          OnBookingAmount: calculatedAmount,
                          OnBookingPercentage: Number(e.target.value),
                        }))
                      }}
                    />
                  </Col>
                  <Col xs={24} lg={18}>
                    <NumberField
                      //  onChange={(e) => setBody({ ...body, OnBookingAmount: e.target.value })}
                      onChange={(e) => {
                        if (
                          Number(e.target.value) >
                          form.getFieldValue('sellingPrice')
                        ) {
                          e.target.value = form.getFieldValue('sellingPrice')
                          form.setFieldValue('OnBookingAmount', e.target.value)
                        }
                        form.setFieldsValue({
                          OnBookingPercentage: calculatePercentage(
                            form.getFieldValue('sellingPrice'),
                            Number(e.target.value)
                          ),
                        })
                        setState((prev) => ({
                          ...prev,
                          OnBookingAmount: Number(e.target.value),
                        }))
                      }}
                      placeholder="Amount"
                      name="OnBookingAmount"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row gutter={10}>
              <Col xs={24} lg={12}>
                <InputLabel>Installment Payment</InputLabel>
                <Row gutter={10}>
                  <Col xs={24} lg={8}>
                    <NumberField
                      //  onChange={(e) => setBody({ ...body, installmentPercentage: e.target.value })}
                      onChange={(e) => {
                        setPercentages((prev) => ({
                          ...prev,
                          installmentPercentage: e.target.value,
                        }))
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'installmentPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          form.getFieldValue('sellingPrice'),
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          installmentAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          installmentAmount: calculatedAmount,
                          installmentPercentage: Number(e.target.value),
                        }))
                      }}
                      placeholder="Percentage"
                      name="installmentPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={16}>
                    <NumberField
                      placeholder="Amount"
                      //  onChange={(e) => setBody({ ...body, installmentAmount: e.target.value })}
                      onChange={(e) => {
                        if (
                          Number(e.target.value) >
                          form.getFieldValue('sellingPrice')
                        ) {
                          e.target.value = form.getFieldValue('sellingPrice')
                          form.setFieldValue(
                            'installmentAmount',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculatePercentage(
                          form.getFieldValue('sellingPrice'),
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          installmentPercentage: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          installmentAmount: calculatedAmount,
                        }))
                      }}
                      name="installmentAmount"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>On Possession</InputLabel>
                <Row gutter={10}>
                  <Col xs={24} lg={8}>
                    <NumberField
                      placeholder="Percentage"
                      //  onChange={(e) => setBody({ ...body, OnPossessionPercentage: e.target.value })}
                      onChange={(e) => {
                        setPercentages((prev) => ({
                          ...prev,
                          OnPossessionPercentage: e.target.value,
                        }))
                        if (Number(e.target.value) > 100) {
                          e.target.value = 100
                          form.setFieldValue(
                            'OnPossessionPercentage',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculateAmount(
                          form.getFieldValue('sellingPrice'),
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          OnPossessionAmount: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          OnPossessionAmount: calculatedAmount,
                          OnPossessionPercentage: Number(e.target.value),
                        }))
                      }}
                      name="OnPossessionPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={16}>
                    <NumberField
                      placeholder="Amount"
                      onChange={(e) => {
                        if (
                          Number(e.target.value) >
                          form.getFieldValue('sellingPrice')
                        ) {
                          e.target.value = form.getFieldValue('sellingPrice')
                          form.setFieldValue(
                            'OnPossessionAmount',
                            e.target.value
                          )
                        }
                        const calculatedAmount = calculatePercentage(
                          form.getFieldValue('sellingPrice'),
                          Number(e.target.value)
                        )
                        form.setFieldsValue({
                          OnPossessionPercentage: calculatedAmount,
                        })
                        setState((prev) => ({
                          ...prev,
                          OnPossessionAmount: calculatedAmount,
                        }))
                      }}
                      name="OnPossessionAmount"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <Row gutter={16}>
                            <Col xs={24} lg={24}>
                                <Checkbox
                                    onChange={(e) =>
                                        setIsBalloon(e.target.checked)
                                    }
                                    checked={isBalloon}
                                    className="mb-[10px]"
                                >
                                    Add Ballon Payment
                                </Checkbox>
                            </Col>
                        </Row> */}
            {/* {body?.updatePropertyWalletProductInstallmentPaymentPlanDto?.isBaloon ? <Row gutter={10}> */}
            {isBalloon ? (
              <Row gutter={10}>
                <Col xs={24} lg={12}>
                  <InputLabel>Ballon Payment</InputLabel>
                  <Row gutter={10}>
                    <Col xs={24} lg={8}>
                      <NumberField
                        placeholder="Percentage"
                        onChange={(e) => {
                          setPercentages((prev) => ({
                            ...prev,
                            BalloonPercentage: e.target.value,
                          }))
                          if (Number(e.target.value) > 100) {
                            e.target.value = 100
                            form.setFieldValue(
                              'BalloonPercentage',
                              e.target.value
                            )
                          }
                          const calculatedAmount = calculateAmount(
                            form.getFieldValue('sellingPrice'),
                            Number(e.target.value)
                          )
                          form.setFieldsValue({
                            BalloonAmount: calculatedAmount,
                          })
                          setState((prev) => ({
                            ...prev,
                            BalloonAmount: calculatedAmount,
                            BalloonPercentage: Number(e.target.value),
                          }))
                        }}
                        name="BalloonPercentage"
                      />
                    </Col>
                    <Col xs={24} lg={16}>
                      <NumberField
                        placeholder="Amount"
                        onChange={(e) => {
                          if (
                            Number(e.target.value) >
                            form.getFieldValue('sellingPrice')
                          ) {
                            e.target.value = form.getFieldValue('sellingPrice')
                            form.setFieldValue('BalloonAmount', e.target.value)
                          }
                          const calculatedAmount = calculatePercentage(
                            form.getFieldValue('sellingPrice'),
                            Number(e.target.value)
                          )
                          form.setFieldsValue({
                            BalloonPercentage: calculatedAmount,
                          })
                          setState((prev) => ({
                            ...prev,
                            BalloonAmount: calculatedAmount,
                          }))
                        }}
                        name="BalloonAmount"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} lg={12}>
                  <InputLabel>Ballon At</InputLabel>
                  <Row gutter={10}>
                    <Col xs={24} lg={8}>
                      <NumberField
                        placeholder="Months"
                        onChange={(e) => {
                          setBody({
                            ...body,
                            updatePropertyWalletProductInstallmentPaymentPlanDto:
                              {
                                ...body.updatePropertyWalletProductInstallmentPaymentPlanDto,
                                BalloonAt: e.target.value,
                              },
                          })
                          if (e.target.value > 0) {
                            setBallonAtDisable(false)
                            form.setFieldsValue({
                              balloonIndex: [],
                            })
                          } else {
                            setBallonAtDisable(true)
                            form.setFieldsValue({
                              balloonIndex: [],
                            })
                          }
                        }}
                        name="BalloonAt"
                      />
                    </Col>
                    <Col xs={24} lg={16}>
                      <Form.Item
                        name="balloonIndex"
                        rules={[
                          {
                            required: true,
                            message: 'Title is required',
                          },
                        ]}
                        className="h-[auto] mt-[3%]"
                      >
                        <Select
                          mode="multiple"
                          size="large"
                          disabled={ballonAtDisable}
                          allowClear
                          style={{ width: '100%' }}
                          placeholder="Balloon At"
                          options={element?.map((val) => ({
                            label: val,
                            value: val,
                          }))}
                          // className="h-[40px] mt-[3%]"

                          onChange={(e) => {
                            if (e.length > form.getFieldValue('BalloonAt')) {
                              e.pop()
                            } else {
                              setBody({
                                ...body,
                                updatePropertyWalletProductInstallmentPaymentPlanDto:
                                  {
                                    ...body.updatePropertyWalletProductInstallmentPaymentPlanDto,
                                    balloonIndex: e,
                                  },
                              })
                            }
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ) : (
              ''
            )}
            <div className="flex justify-end mt-[30px] gap-2">
              <Button
                size="middle"
                key="1"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-white text-black h-[40px]"
                onClick={onCancel}
              >
                Close
              </Button>
              <Button
                size="middle"
                key="2"
                type="primary"
                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                htmlType="submit"
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  )
}

export default EditPaymentPlanModal
