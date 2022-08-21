package com.highradius.servlet;

import java.lang.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
public class getConnection {
	public static int getSlNo() {
		int id=-1;
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","bubul123");
			String query = "SELECT MAX(sl_no) FROM winter_internship";
	        PreparedStatement pst = con.prepareStatement(query);
	        ResultSet rs = pst.executeQuery();

	        while (rs.next()) {
	            int num = rs.getInt(1);
	            int inc = num + 1;
	            id=inc;
	        }
	        return id;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return -1;
	}
	public static Connection getCon()throws Exception {
		
		try {
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","bubul123");
			return con;
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
