package com.highradius.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class predupdate
 */
@WebServlet("/predUpdate")
public class predUpdate extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public predUpdate() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
		HashMap <Object,Object> Response = new HashMap<>();
		String aging_bucket = request.getParameter("aging_bucket");
		String doc_id = request.getParameter("doc_id");
		Class.forName("com.mysql.cj.jdbc.Driver"); 
		Connection connection = getConnection.getCon(); 
		PreparedStatement ps = connection.prepareStatement("UPDATE winter_internship set aging_bucket = ? where doc_id = ?");
		System.out.println(ps);
		ps.setString(1,aging_bucket);
		ps.setString(2, doc_id);
		
		if(ps.executeUpdate() > 0 )
		{
			Response.put("update",true);
		} else {
			Response.put("update",false);
		}
		Gson gson = new Gson();
		response.setHeader("Access-Control-Allow-Origin", "*");
		String jsonResponse = gson.toJson(Response);				
		response.getWriter().append(jsonResponse);
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}