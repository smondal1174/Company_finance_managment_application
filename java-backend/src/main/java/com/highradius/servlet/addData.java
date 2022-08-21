package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class add
 */
@WebServlet("/addData")
public class addData extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doPost(request, response);
				String business_code = request.getParameter("business_code");
				int cust_number = Integer.parseInt(request.getParameter("cust_number"));
				String clear_date = request.getParameter("clear_date");
				String buisness_year= request.getParameter("buisness_year");
				String doc_id= request.getParameter("doc_id");
				String posting_date= request.getParameter("posting_date");
				String document_create_date= request.getParameter("document_create_date");
				String due_in_date= request.getParameter("due_in_date");
				String invoice_currency= request.getParameter("invoice_currency");
				String document_type= request.getParameter("document_type");
				int posting_id= Integer.parseInt(request.getParameter("posting_id"));
				double total_open_amount= Double.parseDouble(request.getParameter("total_open_amount"));
				String baseline_create_date= request.getParameter("baseline_create_date");
				String cust_payment_terms= request.getParameter("cust_payment_terms");
				int invoice_id= Integer.parseInt(request.getParameter("invoice_id"));
				System.out.println(request.getParameter("business_code"));
				try {
					HashMap<Object, Object> Response = new HashMap<Object, Object>();
					Class.forName("com.mysql.cj.jdbc.Driver");
					Connection connection = getConnection.getCon();
					String sql = "Insert into winter_internship values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
					PreparedStatement ps = connection.prepareStatement(sql);
					ps.setInt(1,getConnection.getSlNo());
					ps.setString(2,business_code);
					ps.setInt(3,cust_number);
					ps.setString(4,clear_date);
					ps.setString(5,buisness_year);
					ps.setString(6,doc_id);
					ps.setString(7,posting_date);
					ps.setString(8,document_create_date);
					ps.setString(9,null);
					ps.setString(10,due_in_date);
					ps.setString(11,invoice_currency);
					ps.setString(12,document_type);
					ps.setInt(13,posting_id);
					ps.setString(14,null);
					ps.setDouble(15,total_open_amount);
					ps.setString(16,baseline_create_date);
					ps.setString(17,cust_payment_terms);
					ps.setInt(18,invoice_id);
					ps.setString(19,null);
					ps.setString(20,null);
					ps.setString(21,null);
					System.out.println(ps);
					if(ps.executeUpdate()>0) {
						Response.put("insert", true);
					}else {
						Response.put("insert", false);
					}
					
					Gson gson =new Gson();
					String JSONResponse =gson.toJson(Response);
					response.addHeader("Access-Control-Allow-Origin", "*");
					response.getWriter().print(JSONResponse);
				}
				catch(Exception e)
				{
					e.printStackTrace();
					 System.out.println("Result not entered");
				}
	}

}