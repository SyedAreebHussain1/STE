import React, { useEffect, useState } from 'react'
import { Button, Col, Divider, Form, Modal, Select, Row, Checkbox } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import InputLabel from '../../../../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../../../../utils/components/InputFields/NumberField'
import TextField from '../../../../../../../utils/components/InputFields/TextField'

import {
  calculateAmount,
  calculatePercentage,
} from '../../../../../../../utils/utils'
import { errorMessage } from '../../../../../../../utils/message'
import {
  updatePropertyWalletInventoryStep3TempleteApi,
  uploadTemplatePdfApi,
} from '../../../../../../../redux/api/Project/ProjectInventory'
import { SelectField } from '../../../../../../../utils/components/InputFields/SelectField'
import { useUpload } from '../../../../../../../utils/hooks/useUpload'
import Upload from '../../../../../../../utils/components/Upload/Upload'
import DocumentPreviewer from '../../../../../../../utils/components/Upload/DocumentPreviewer'
import { clearUploadTemplatePdf } from '../../../../../../../redux/slices/Project/ProjectInventory/uploadTemplatePdfSlice'
import CustomTokenAmount from '../../../../../../../utils/components/PaymentPlan/CustomTokenAmount'

const EditPaymentPlanModal = ({ visible, toggleAdd, data, tokenPayment }) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  function changeSelectedOptions(value) {
    setSelectedOptions(value)
  }
  const [legalPdf, setLegalPdf, pdfPreviews, deleteFile, , filesCountLegal] =
    useUpload()
  const dispatch = useDispatch()
  const [form] = useForm()
  const uploadTemplatePdf = useSelector((state) => state.uploadTemplatePdf)
  const createPrice = useSelector(
    (state) => state.createProjectInventoryStepOne
  )
  const updatePrice = useSelector(
    (state) => state.updateProjectInventoryStepOne
  )
  let [element, setElement] = useState([])
  let [renderMinimumPrice, setRenderMinimumPrice] = useState()
  let [noOfMonthState, setNoOfMonthState] = useState(null)
  const [percentages, setPercentages] = useState({})
  let [isBalloon, setIsBalloon] = useState(false)
  let [ballonAtDisable, setBallonAtDisable] = useState(false)

  const [state, setState] = useState({
    // discountAmount: '',
    // OnBookingAmount: '',
    // installmentAmount: '',
    // OnPossessionAmount: '',
    // BalloonAmount: '',
  })
  const sellingPrice =
    updatePrice?.data?.data?.price || createPrice?.data?.data?.price

  useEffect(() => {
    // if (state.discountAmount > 0) {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
    // form.setFieldValue("token", sellingPrice - totalAmountToSubtract);
    // }
  }, [state.discountAmount, createPrice, updatePrice])

  useEffect(() => {
    if (data.length > 0 && visible) {
      setState({
        discountPercentage: data[0].discountPercentage,
        // discountAmount: data[0].discountAmount,
        OnBookingPercentage: data[0].OnBookingPercentage,
        OnBookingAmount: data[0].OnBookingAmount,
        // minimumPrice: data[0].minimumPrice,
        minimumPrice: form.getFieldValue().minimumPrice,
        commissionPercentage: data[0].commissionPercentage,
        spCommissionPercentage: data[0].spCommissionPercentage,
        lgCommissionPercentage: data[0].lgCommissionPercentage,
        OnPossessionPercentage: data[0].OnPossessionPercentage,
        OnPossessionAmount: data[0].OnPossessionAmount,
        plan: data[0].plan,
        url: data[0].url,
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
        title: data[0].title,
        url: data[0].url,
        // minimumPrice: data[0].minimumPrice,
        minimumPrice: form.getFieldValue().minimumPrice,
        commissionPercentage: data[0].commissionPercentage,
        spCommissionPercentage: data[0].spCommissionPercentage,
        lgCommissionPercentage: data[0].lgCommissionPercentage,
        OnPossessionPercentage: data[0].OnPossessionPercentage,
        OnPossessionAmount: data[0].OnPossessionAmount,
        plan: data[0].plan,
        token: data[0].token,
        noOfMonths: data[0].noOfMonths,
        installmentPercentage: data[0].installmentPercentage,
        installmentAmount: data[0].installmentAmount,
        startingMonth: data[0].installmentStartDuration,
        agentCommissiion: data[0].agentCommissiion,
        freeLancerCommissiion: data[0].freeLancerCommissiion,
        agentELoungeSaleCommissiion: data[0].agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion:
          data[0].freelancerELoungeSaleCommissiion,
        // outdoorComission: data[0].outdoorComission,
        extraCommissiion: data[0].extraCommissiion,
        consecutive: data[0].agencyIncrementCommission,
        flextc: data[0]?.freeLancerExtraCommissiion,
        paextc: data[0]?.premiumAgencyExtraCommissiion,
        eloungeOtherCommission: data[0]?.eloungeOtherCommission,
        outdoorAgencyEloungeComission: Number(
          data[0]?.outdoorAgencyEloungeComission
        ),
        outdoorFreelancerEloungeComission: Number(
          data[0]?.outdoorFreelancerEloungeComission
        ),
        outdoorPremiumAgencyEloungeComission: Number(
          data[0]?.outdoorPremiumAgencyEloungeComission
        ),
        agencyIncrementTimeLimit: Number(data[0]?.agencyIncrementTimeLimit),
        premiumAgencyIncrementCommission: Number(
          data[0]?.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          data[0]?.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(
          data[0]?.freeLancerIncrementCommission
        ),
        freeLancerIncrementTimeLimit: Number(
          data[0]?.freeLancerIncrementTimeLimit
        ),
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
  }, [data[0].data, visible])
  const [body, setBody] = useState({
    propertyWalletInventoryId: '',
    updatePropertyWalletInstallmentPaymentPlanDto: {
      plan: '',
      token: 0,
      noOfMonths: 0,
      discountAmount: 0,
      discountPercentage: 0,
      commissionPercentage: 0,
      spCommissionPercentage: 0,
      lgCommissionPercentage: 0,
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
    setBallonAtDisable(true)
  }, [visible])
  useEffect(() => {
    setBody({
      ...body,
      propertyWalletInventoryId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
    })
  }, [updatePrice, createPrice])
  useEffect(() => {
    // if (state.discountAmount > 0) {
    const totalAmountToSubtract = state.discountAmount
    form.setFieldValue('minimumPrice', sellingPrice - totalAmountToSubtract)
  }, [state.discountAmount, visible])
  useEffect(() => {
    form.setFieldValue('sellingPrice', sellingPrice)
  }, [visible, sellingPrice])
  useEffect(() => {
    let array = []
    for (
      let index = 1;
      index <= body.updatePropertyWalletInstallmentPaymentPlanDto.noOfMonths;
      index++
    ) {
      array.push(index)
    }
    setElement(array)
  }, [body.updatePropertyWalletInstallmentPaymentPlanDto.noOfMonths])
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
    setElement([])
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
      propertyWalletInventoryId:
        updatePrice?.data?.data?.id || createPrice?.data?.data?.id,
      updatePropertyWalletInstallmentPaymentPlanDto: {
        tokenAmount: selectedOptions.map((item) => Number(item)),
        plan: e.plan,
        title: e.title,
        url: uploadTemplatePdf?.data?.data || data?.[0]?.url,
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
        agentCommissiion: e.agentCommissiion,
        freeLancerCommissiion: e.freeLancerCommissiion,
        agentELoungeSaleCommissiion: e.agentELoungeSaleCommissiion,
        freelancerELoungeSaleCommissiion: e.freelancerELoungeSaleCommissiion,
        // outdoorComission: e.outdoorComission,
        extraCommissiion: e.extraCommissiion,
        agencyIncrementCommission: e.consecutive,
        freeLancerExtraCommissiion: e.flextc,
        premiumAgencyExtraCommissiion: e.paextc,
        eloungeOtherCommission: e.eloungeOtherCommission,
        outdoorAgencyEloungeComission: Number(e?.outdoorAgencyEloungeComission),
        outdoorFreelancerEloungeComission: Number(
          e?.outdoorFreelancerEloungeComission
        ),
        outdoorPremiumAgencyEloungeComission: Number(
          e?.outdoorPremiumAgencyEloungeComission
        ),
        agencyIncrementTimeLimit: Number(e.agencyIncrementTimeLimit),
        premiumAgencyIncrementCommission: Number(
          e.premiumAgencyIncrementCommission
        ),
        premiumAgencyIncrementTimeLimit: Number(
          e.premiumAgencyIncrementTimeLimit
        ),
        freeLancerIncrementCommission: Number(e.freeLancerIncrementCommission),
        freeLancerIncrementTimeLimit: Number(e.freeLancerIncrementTimeLimit),
      },
    }
    if (isBalloon) {
      body.updatePropertyWalletInstallmentPaymentPlanDto.BalloonPercentage =
        Number(e.BalloonPercentage)
      body.updatePropertyWalletInstallmentPaymentPlanDto.BalloonAmount = Number(
        e.BalloonAmount
      )
      body.updatePropertyWalletInstallmentPaymentPlanDto.BalloonAt = Number(
        e.BalloonAt
      )
      body.updatePropertyWalletInstallmentPaymentPlanDto.balloonIndex =
        e.balloonIndex
    }
    let sum = 0
    for (const property in body.updatePropertyWalletInstallmentPaymentPlanDto) {
      if (
        property.includes('Percentage') &&
        property !== 'discountPercentage' &&
        property !== 'commissionPercentage' &&
        property !== 'spCommissionPercentage' &&
        property !== 'lgCommissionPercentage'
      ) {
        sum += body.updatePropertyWalletInstallmentPaymentPlanDto[property]
      }
    }
    if (sum < 100 || sum > 100) {
      errorMessage('Percentage should equal to 100')
      return
    }
    updatePropertyWalletInventoryStep3TempleteApi(
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
    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
    setBallonAtDisable(false)
  }
  function onCancel() {
    dispatch(clearUploadTemplatePdf())
    deleteFile(pdfPreviews?.[0]?.name)
    toggleAdd()
    form.resetFields()
    setIsBalloon(false)
    setNoOfMonthState(null)
    setPercentages({})
    form.resetFields()
    setIsBalloon(false)
    setState({
      discountAmount: 0,
      OnBookingAmount: 0,
      installmentAmount: 0,
      OnPossessionAmount: 0,
      BalloonAmount: 0,
    })
    setBallonAtDisable(false)
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
    // }
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
            name="form-2"
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
                      updatePropertyWalletInstallmentPaymentPlanDto: {
                        ...body.updatePropertyWalletInstallmentPaymentPlanDto,
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
                      updatePropertyWalletInstallmentPaymentPlanDto: {
                        ...body.updatePropertyWalletInstallmentPaymentPlanDto,
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
                    //     updatePropertyWalletInstallmentPaymentPlanDto:
                    //         {
                    //             ...body.updatePropertyWalletInstallmentPaymentPlanDto,
                    //             noOfMonths: Number(
                    //                 e.target.value
                    //             ),
                    //         },
                    // })
                    setNoOfMonthState(
                      form.getFieldsValue().plan === 'quarterly'
                        ? Math.round(Number(e.target.value / 3))
                        : Number(e.target.value)
                    )

                    if (e) {
                      form.setFieldsValue({
                        BalloonAt: null,
                        balloonIndex: [],
                      })
                      setBallonAtDisable(true)
                    }
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
                  name="pdfEdit"
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
                  // )}
                  onChange={(e) => {
                    // setRenderComponent(e)
                    setRenderMinimumPrice(e)
                    setPercentages({})
                    dropDownChange()
                    if (e === 'balloon') {
                      setBallonAtDisable(false)
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
                        balloonIndex: [],
                        BalloonAt: null,
                      })
                      setState({
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        installmentAmount: null,
                        BalloonAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        balloonIndex: [],
                        BalloonAt: null,
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
                        BalloonPercentage: null,
                        BalloonAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        balloonIndex: [],
                        BalloonAt: null,
                      })
                      setState({
                        OnBookingAmount: null,
                        OnPossessionAmount: null,
                        installmentAmount: null,
                        discountAmount: null,
                        discountPercentage: null,
                        balloonIndex: [],
                        BalloonAt: null,
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
                        // setRenderMinimumPrice(e)
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
                        // if (e.target.value > 0) {
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
                        //     // setState({
                        //     //     OnBookingAmount: null,
                        //     //     OnPossessionAmount: null,
                        //     //     installmentAmount: null,

                        //     //     balloonIndex: [],
                        //     //     BalloonAt: null
                        //     // })

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
                        //     // setState({
                        //     //     OnBookingAmount: null,
                        //     //     OnPossessionAmount: null,
                        //     //     installmentAmount: null,
                        //     //     balloonIndex: [],
                        //     //     BalloonAt: null
                        //     // })
                        //     // setIsBalloon(false)
                        // }
                      }}
                      placeholder="Percentage"
                      name="discountPercentage"
                    />
                  </Col>
                  <Col xs={24} lg={18}>
                    <NumberField
                      onChange={(e) => {
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
                            // OnBookingPercentage: null,
                            // OnBookingAmount: null,
                            // installmentPercentage: null,
                            // installmentAmount: null,
                            // OnPossessionPercentage: null,
                            // OnPossessionAmount: null,
                            // BalloonPercentage: null,
                            // BalloonAmount: null,
                            BalloonAt: null,
                            balloonIndex: [],
                          })
                        } else {
                          // form.setFieldsValue({
                          //   OnBookingPercentage: null,
                          //   OnBookingAmount: null,
                          //   installmentPercentage: null,
                          //   installmentAmount: null,
                          //   OnPossessionPercentage: null,
                          //   OnPossessionAmount: null,
                          // });
                          setIsBalloon(false)
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
                  optionsPrev={data?.[0]?.propertyWalletInstallmentToken?.map(
                    (item) => item.token
                  )}
                />
              </Col>
            </Row>
            <InputLabel>
              <b>For App Users</b>
            </InputLabel>
            <Divider />
            <Row gutter={16}>
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
              <Col xs={24} lg={12}>
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
              <Col xs={24} lg={12}>
                <InputLabel>Agency Commission</InputLabel>
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
              </Col>
              {/* <Col xs={24} lg={12}>
                <InputLabel>Agent Commission</InputLabel>
                <NumberField
                  name="agentCommissiion"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('agentCommissiion', e.target.value)
                    }
                  }}
                />
              </Col> */}
              <Col xs={24} lg={12}>
                <InputLabel>Agency Extra Commission</InputLabel>
                <NumberField
                  name="extraCommissiion"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('extraCommissiion', e.target.value)
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Premium agency extra Commission</InputLabel>
                <NumberField
                  name="paextc"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('paextc', e.target.value)
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Freelancer Commission</InputLabel>
                <NumberField
                  name="freeLancerCommissiion"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'freeLancerCommissiion',
                        e.target.value
                      )
                    }
                  }}
                />
              </Col>

              {/* <Col xs={24} lg={12}>
                <InputLabel>Outdoor Comission</InputLabel>
                <NumberField
                  name="outdoorComission"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('outdoorComission', e.target.value)
                    }
                  }}
                />
              </Col> */}
              <Col xs={24} lg={12}>
                <InputLabel>Freelancer extra Commission</InputLabel>
                <NumberField
                  name="flextc"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('flextc', e.target.value)
                    }
                  }}
                />
              </Col>

              <Col xs={24} lg={12}>
                <InputLabel>Consecutive Commission</InputLabel>
                <NumberField
                  name="consecutive"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue('consecutive', e.target.value)
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Agency Increment Time Limit</InputLabel>
                <NumberField name="agencyIncrementTimeLimit" />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Premium Agency Increment Commission</InputLabel>
                <NumberField name="premiumAgencyIncrementCommission" />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Premium Agency Increment TimeLimit</InputLabel>
                <NumberField name="premiumAgencyIncrementTimeLimit" />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>FreeLancer Increment Commission</InputLabel>
                <NumberField name="freeLancerIncrementCommission" />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>FreeLancer Increment Time Limit</InputLabel>
                <NumberField name="freeLancerIncrementTimeLimit" />
              </Col>
            </Row>
            <InputLabel>
              <b>For ELounge Users</b>
            </InputLabel>
            <Divider />
            <Row gutter={16}>
              <Col xs={24} lg={12}>
                <InputLabel>Agent E-Lounge Commission</InputLabel>
                <NumberField
                  name="agentELoungeSaleCommissiion"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'agentELoungeSaleCommissiion',
                        e.target.value
                      )
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Freelancer E-Lounge Sale Commissiion</InputLabel>
                <NumberField
                  name="freelancerELoungeSaleCommissiion"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'freelancerELoungeSaleCommissiion',
                        e.target.value
                      )
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>Elounge other Commission</InputLabel>
                <NumberField
                  name="eloungeOtherCommission"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'eloungeOtherCommission',
                        e.target.value
                      )
                    }
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel> Outdoor Agency Elounge Comission</InputLabel>
                <NumberField
                  name="outdoorAgencyEloungeComission"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'outdoorAgencyEloungeComission',
                        e.target.value
                      )
                    }
                    // setState((prev) => ({
                    //   ...prev,
                    //   outdoorAgencyEloungeComission: Number(e.target.value),
                    // }))
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel> Outdoor Freelacner Elounge Comission</InputLabel>
                <NumberField
                  name="outdoorFreelancerEloungeComission"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'outdoorFreelancerEloungeComission',
                        e.target.value
                      )
                    }
                    // setState((prev) => ({
                    //   ...prev,
                    //   outdoorFreelacnerEloungeComission: Number(
                    //     e.target.value
                    //   ),
                    // }))
                  }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <InputLabel>
                  {' '}
                  Outdoor Premium Agency Elounge Comission
                </InputLabel>
                <NumberField
                  name="outdoorPremiumAgencyEloungeComission"
                  placeholder="Percentage"
                  onChange={(e) => {
                    if (Number(e.target.value) > 100) {
                      e.target.value = 100
                      form.setFieldValue(
                        'outdoorPremiumAgencyEloungeComission',
                        e.target.value
                      )
                    }
                    // setState((prev) => ({
                    //   ...prev,
                    //   outdoorPremiumAgencyEloungeComission: Number(
                    //     e.target.value
                    //   ),
                    // }))
                  }}
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
            {/* {body?.updatePropertyWalletInstallmentPaymentPlanDto?.isBaloon ? <Row gutter={10}> */}
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
                            updatePropertyWalletInstallmentPaymentPlanDto: {
                              ...body.updatePropertyWalletInstallmentPaymentPlanDto,
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
                          allowClear
                          disabled={ballonAtDisable}
                          size="large"
                          style={{ width: '100%' }}
                          placeholder="Balloon At"
                          options={element?.map((val) => ({
                            label: val,
                            value: val,
                          }))}
                          onChange={(e) => {
                            if (e.length > form.getFieldValue('BalloonAt')) {
                              e.pop()
                            } else {
                              setBody({
                                ...body,
                                updatePropertyWalletInstallmentPaymentPlanDto: {
                                  ...body.updatePropertyWalletInstallmentPaymentPlanDto,
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
