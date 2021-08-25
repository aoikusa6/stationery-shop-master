import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({isShowing, hide}) =>
	isShowing
		? ReactDOM.createPortal(
				<React.Fragment>
					<div className='OVERLAY_STYLES' />
					<div className='MODAL_STYLES'>
						<div className='modal-content'>
							<div className='modal-header'>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'
								>
									×
								</button>
								<h4 className='modal-title' id='myModalLabel'>
									Đăng nhập / Đăng kí
								</h4>
							</div>
							<div className='modal-body'>
								<div className='row'>
									<div
										className='col-md-8'
										style={{
											borderRight: "1px dotted #C2C2C2",
											paddingRight: "30px",
										}}
									>
										<ul className='nav nav-tabs'>
											<li className='active'>
												<a href='#Login' data-toggle='tab'>
													Đăng nhập
												</a>
											</li>
											<li>
												<a href='#Registration' data-toggle='tab'>
													Đăng kí
												</a>
											</li>
										</ul>
										<div className='tab-content'>
											<div className='tab-pane active' id='Login'>
												<form className='form-horizontal'>
													<div className='form-group'>
														<label
															htmlFor='email'
															className='col-sm-2 control-label'
														>
															Email:
														</label>
														<div className='col-sm-10'>
															<input
																type='email'
																className='form-control'
																id='email1'
																placeholder='Vui lòng nhập email của bạn'
															/>
														</div>
													</div>
													<div className='form-group'>
														<label
															htmlFor='exampleInputPassword1'
															className='col-sm-2 control-label'
														>
															Mật khẩu:
														</label>
														<div className='col-sm-10'>
															<input
																type='email'
																className='form-control'
																id='exampleInputPassword1'
																placeholder='Vui lòng nhập mật khẩu của bạn'
															/>
														</div>
													</div>
													<div className='row'>
														<div className='col-sm-2'></div>
														<div className='col-sm-10'>
															<button
																type='submit'
																className='btn btn-primary btn-sm'
															>
																Gửi
															</button>
															<a href='#'>Quên mật khẩu?</a>
														</div>
													</div>
												</form>
											</div>
											<div className='tab-pane' id='Registration'>
												<form className='form-horizontal'>
													<div className='form-group'>
														<label
															htmlFor='email'
															className='col-sm-2 control-label'
														>
															Tên
														</label>
														<div className='col-sm-10'>
															<div className='row'>
																<div className='col-md-3'>
																	<select className='form-control'>
																		<option>Ông</option>
																		<option>Bà</option>
																	</select>
																</div>
																<div className='col-md-9'>
																	<input
																		type='text'
																		className='form-control'
																		placeholder='Họ và tên'
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className='form-group'>
														<label
															htmlFor='email'
															className='col-sm-2 control-label'
														>
															Email:
														</label>
														<div className='col-sm-10'>
															<input
																type='email'
																className='form-control'
																id='email'
																placeholder='Vui lòng nhập email của bạn'
															/>
														</div>
													</div>
													<div className='form-group'>
														<label
															htmlFor='mobile'
															className='col-sm-2 control-label'
														>
															Số điện thoại
														</label>
														<div className='col-sm-10'>
															<input
																type='email'
																className='form-control'
																id='mobile'
																placeholder='Vui lòng nhập số điện thoại của bạn'
															/>
														</div>
													</div>
													<div className='form-group'>
														<label
															htmlFor='password'
															className='col-sm-2 control-label'
														>
															Mật khẩu
														</label>
														<div className='col-sm-10'>
															<input
																type='password'
																className='form-control'
																id='password'
																placeholder='Vui lòng nhập mật khẩu của bạn'
															/>
														</div>
													</div>
													<div className='row'>
														<div className='col-sm-2'></div>
														<div className='col-sm-10'>
															<button
																type='button'
																className='btn btn-primary btn-sm'
															>
																Lưu &amp; Gửi
															</button>
															<button
																type='button'
																className='btn btn-default btn-sm'
															>
																Thoát
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div id='OR' className='hidden-xs'>
											OR
										</div>
									</div>
									<div className='col-md-4'>
										<div className='row text-center sign-with'>
											<div className='col-md-12'>
												<h3>Đăng nhập với</h3>
											</div>
											<div className='col-md-12'>
												<div className='btn-group btn-group-justified'>
													<a href='#' className='btn btn-primary'>
														Facebook
													</a>
													<a href='#' className='btn btn-danger'>
														Google
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>,
				document.getElementById("portal")
		  )
		: null;

export default Modal;
