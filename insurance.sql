USE [master]
GO
/****** Object:  Database [HealthInsurance3]    Script Date: 9/13/2022 12:49:17 AM ******/
CREATE DATABASE [HealthInsurance3]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'HealthInsurance', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.CHUBATHONG\MSSQL\DATA\HealthInsurance3.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'HealthInsurance_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.CHUBATHONG\MSSQL\DATA\HealthInsurance3_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [HealthInsurance3] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HealthInsurance3].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HealthInsurance3] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HealthInsurance3] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HealthInsurance3] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HealthInsurance3] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HealthInsurance3] SET ARITHABORT OFF 
GO
ALTER DATABASE [HealthInsurance3] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [HealthInsurance3] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HealthInsurance3] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HealthInsurance3] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HealthInsurance3] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HealthInsurance3] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HealthInsurance3] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HealthInsurance3] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HealthInsurance3] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HealthInsurance3] SET  DISABLE_BROKER 
GO
ALTER DATABASE [HealthInsurance3] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HealthInsurance3] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HealthInsurance3] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HealthInsurance3] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HealthInsurance3] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HealthInsurance3] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HealthInsurance3] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HealthInsurance3] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [HealthInsurance3] SET  MULTI_USER 
GO
ALTER DATABASE [HealthInsurance3] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HealthInsurance3] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HealthInsurance3] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HealthInsurance3] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HealthInsurance3] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [HealthInsurance3] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'HealthInsurance3', N'ON'
GO
ALTER DATABASE [HealthInsurance3] SET QUERY_STORE = OFF
GO
USE [HealthInsurance3]
GO
/****** Object:  Table [dbo].[Contact]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[ContactId] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](250) NULL,
	[email] [varchar](250) NULL,
	[message] [varchar](250) NULL,
	[date] [date] NULL,
 CONSTRAINT [PK_Contact] PRIMARY KEY CLUSTERED 
(
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[joindate] [date] NULL,
	[fullname] [varchar](250) NULL,
	[username] [varchar](250) NULL,
	[password] [varchar](250) NULL,
	[address] [varchar](250) NULL,
	[phoneNumber] [varchar](50) NULL,
	[country] [varchar](50) NULL,
	[city] [varchar](50) NULL,
	[policyid] [int] NULL,
	[policyStatus] [varchar](50) NULL,
	[role] [varchar](50) NULL,
	[managerId] [int] NULL,
	[email] [varchar](250) NULL,
	[securitycode] [varchar](250) NULL,
	[photo] [varchar](250) NULL,
 CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedback]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedback](
	[FeedbackId] [int] IDENTITY(1,1) NOT NULL,
	[rate] [varchar](250) NULL,
	[message] [varchar](250) NULL,
	[dateofbirth] [date] NULL,
	[gender] [varchar](250) NULL,
	[email] [varchar](250) NULL,
	[phone] [varchar](250) NULL,
	[date] [date] NULL,
 CONSTRAINT [PK_Feedback] PRIMARY KEY CLUSTERED 
(
	[FeedbackId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Hospital]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hospital](
	[HospitalId] [varchar](50) NOT NULL,
	[HospitalName] [varchar](250) NULL,
	[PhoneNumber] [varchar](50) NULL,
	[Location] [varchar](250) NULL,
	[Url] [varchar](250) NULL,
 CONSTRAINT [PK_Hospital] PRIMARY KEY CLUSTERED 
(
	[HospitalId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InsuranceCompany]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InsuranceCompany](
	[CompanyId] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [varchar](50) NULL,
	[Address] [varchar](250) NULL,
	[Phone] [varchar](50) NULL,
	[Url] [varchar](50) NULL,
 CONSTRAINT [PK_InsuranceCompany] PRIMARY KEY CLUSTERED 
(
	[CompanyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Policy]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Policy](
	[policyId] [int] IDENTITY(1,1) NOT NULL,
	[policyName] [varchar](50) NULL,
	[policyDescription] [varchar](250) NULL,
	[amount] [money] NULL,
	[EMI] [money] NULL,
	[Duration] [int] NULL,
	[companyId] [int] NULL,
	[hospitalId] [varchar](50) NULL,
 CONSTRAINT [PK_Policy] PRIMARY KEY CLUSTERED 
(
	[policyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PolicyRequestDetails]    Script Date: 9/13/2022 12:49:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PolicyRequestDetails](
	[RequestId] [int] IDENTITY(1,1) NOT NULL,
	[RequestDate] [date] NULL,
	[EmployeeId] [int] NULL,
	[PolicyId] [int] NULL,
	[amount] [money] NULL,
	[Emi] [money] NULL,
	[companyId] [int] NULL,
	[Status] [varchar](50) NULL,
	[ManagerId] [int] NULL,
	[Reason] [varchar](250) NULL,
	[description] [varchar](250) NULL,
 CONSTRAINT [PK_PolicyRequestDetails] PRIMARY KEY CLUSTERED 
(
	[RequestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (1, N'ricardo', N'phat@gmail.com', N'happy with this service', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (2, N'ricardo', N'phat@gmail.com', N'happy with this service', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (3, N'phat', N'a@gmail.com', N'i hope this service make me better', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (4, N'ricardo', N'a@gmail.com', N'happy with this service', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (5, N'ricardo', N'phat@gmail.com', N'happy with this service', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (6, N'ricardo', N'ricardo@gmail.com', N'happy with this service', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (7, N'Rumble
', N'rumbleboy@gmail.com', N'hahahahaha 
be kind 
', CAST(N'2021-11-23' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (8, N'double bash', N'bass@gmail.com', N'give me more food ', CAST(N'2021-11-23' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (9, N'Iceiceice', N'ice@gmail.com', N'hello guys', CAST(N'2021-11-24' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (10, N'hello sir', N'a@gmail.com', N'abc', CAST(N'2021-11-24' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (11, N'aaa', N'a@gmail.com', N'dadadadada', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (12, N'aa', N'aa@gmail.com', N'ok', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (13, N'employee', N'chubathongp2000@gmail.com', N'hello guys', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Contact] ([ContactId], [name], [email], [message], [date]) VALUES (14, N'employee', N'chubathongp2000@gmail.com', N'aaaaaa', CAST(N'2021-11-27' AS Date))
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
SET IDENTITY_INSERT [dbo].[Employee] ON 

INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (1, CAST(N'2020-10-20' AS Date), N'Hai', N'employee3', N'$2b$10$R/Yyd4zAUKFSRB0wVs5VAOsBOJw54XGI9mlWaEd2zlBAvpS8aMc3W', N'saigon', N'0901234567', N'hcm', N'hcm', 1, N'Inactivated', N'employee', 1, N'c@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (47, CAST(N'2020-10-11' AS Date), N'haikenny', N'manager2', N'$2b$10$AwXHMBPX4SL3GNM3g30NJ.LOgvdhUegTyxLE5WKzR6i3fLVQ436gC', N'tphcm2', N'0123231654', N'hcm', N'hcm', 1, N'Inactivated', N'employee', 1, N'c@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (53, CAST(N'2020-10-11' AS Date), N'manager', N'manager', N'$2b$10$AwXHMBPX4SL3GNM3g30NJ.LOgvdhUegTyxLE5WKzR6i3fLVQ436gC', N'tphcm', N'0123231657', N'hcm', N'hcm', 1, N'Activated', N'manager', 1, N'chubathongp2000@gmail.com', NULL, N'https://localhost:44325/uploads/slide-3.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (58, CAST(N'2021-11-03' AS Date), N'employee', N'employee', N'$2b$10$MqfQX53Wq4mXwJIGFC3hk.OzX8LOZxafr0OwJFm9PvFIJ01j/am/m', N'saigon', N'0901234458', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 65, N'chubathongp2000@gmail.com', NULL, N'https://localhost:44325/uploads/slide-3.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (63, CAST(N'2021-11-01' AS Date), N'Phat', N'employee1', N'$2b$10$DYnH0cDtExbw7zYY3Fa0vep/vNxt2h8OQ20NZODg2iJXz8fVq7F/i', N'sai gon', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Activated', N'employee', 1, N'phat@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (65, CAST(N'2021-11-17' AS Date), N'Jordan', N'manager4', N'$2b$10$AwXHMBPX4SL3GNM3g30NJ.LOgvdhUegTyxLE5WKzR6i3fLVQ436gC', N'tphcm', N'0123231654', N'hcm', N'hcm', 1, N'Activated', N'manger', 1, N'c@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (66, CAST(N'2021-11-13' AS Date), N'Nomail', N'manager3', N'$2b$10$yseElyaE01NrFm06IJb24ew.27fRBnFgq1K5mVyRDY959mmuiJJS.', N'Sai Gon', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Activated', N'manager', 1, N'hex@gmail.com', NULL, N'https://localhost:44325/uploads/icon2.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (67, CAST(N'2021-11-13' AS Date), N'Nike', N'employee5', N'$2b$10$tmzleOrH9M00FQbv8KNhreudzbq/YpcPiKUUpa23XbXApnt3MldQq', N'tphcm', N'0123231654', N'Vi?t Nam', N'Vi?t Nam', 1, N'Inactivated', N'manager', 1, N'a@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (68, CAST(N'2021-11-14' AS Date), N'Ole', N'manager6', N'$2b$10$6i.jKT0oKQm2qf8jsg1mZegRkVs4IrA/9hysqSdqx1Im1UWWVFGeW', N'saigon', N'012345678', N'VietNam', N'SaiGon', 1, N'Activated', N'manager', 1, N'phat@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (69, CAST(N'2021-11-17' AS Date), N'hai', N'phat', N'$2b$10$GzbHWBm5c8UuxeuDTH5BF.pfMTwwxG7Zputw2pvUuhq3bgoAHQZnS', N'SaiGon', N'012345678', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'phat@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (70, CAST(N'2021-11-14' AS Date), N'admin', N'admin', N'$2b$10$B8Y079eHZiuIiLsKHzHmlOpEEqHQXlhWEmTNTUiHE12KOfK3wthS2', N'SaiGon', N'012345678', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'admin', 1, N'chubathongp2000@gmail.com', N'3b96855e70594704afacf90af50ddf45', N'https://localhost:44325/uploads/user2-160x160.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (71, CAST(N'2021-11-17' AS Date), N'Hoa Moc Lan', N'acc1', N'$2b$10$eKcjHrC42UQNDQHKX0jGQ.2CFYKF8hTO3MRr3LcrmMDiH/iaCVEIS', N'saigon', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathongp2000@gmail.com', N'9e2eaba84fcc45c3b03e03639fe54778', N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (72, CAST(N'2021-11-16' AS Date), N'phatnguyen', N'employee2', N'$2b$10$v/9mmqvWi1C7eb1VOKeDM.uCkLs.U0WNyETbyVVrJcwy.M7zWmMKS', N'Binh Thanh', N'012345678', N'VietNam', N'Saigon', 1, N'Inactivated', N'manager', 1, N'phatnguyen@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (73, CAST(N'2021-11-18' AS Date), N'Messi', N'taylorswift', N'$2b$10$zHuCjYu5vEDtwK8LY4UOtuJlwpQMEw460JcxBOHEtjVXM0eGUXWIq', N'New York', N'012345687', N'US', N'New York', 1, N'Inactivated', N'employee', 1, N'taylorswift@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (74, CAST(N'2021-11-18' AS Date), N'Thuy Loan', N'employee15', N'$2b$10$IYtniK08uPiZh9lqIDhy0.kN8rS55uaOzSJQrnCd8alrfu6.0HB6a', N'New York', N'0901234567', N'US', N'New York', 1, N'Inactivated', N'employee', 1, N'taylorswift@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (75, CAST(N'2021-11-18' AS Date), N'Hoa Lan', N'manager5', N'$2b$10$EqHLDTUOvNcJ1V8wykO7eOxeHKcaFpYBmpDD3NPNDtcOnKOTB7pZ.', N'Sai Gon', N'0123231654', N'Viet Nam', N'Sai Gon', 1, N'Activated', N'manager', 1, N'hoalan@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (76, CAST(N'2021-11-18' AS Date), N'Hoa Hue', N'manager7', N'$2b$10$O.ZRs3OnsIIMhCZ5DfT7rOZQRw4SR.27Adqs5P/DRyXUyQAL0nN66', N'Sai Gon', N'0123231654', N'Viet Nam', N'Sai Gon', 1, N'Activated', N'manager', 1, N'hoahue@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (77, CAST(N'2021-11-18' AS Date), N'Rooney', N'employee10', N'$2b$10$34OBmsnq.lQf7Bs.Hxw/aO.V8ptEps3RYujKsKqn4obeUfN9tKUQ.', N'TPHCM', N'012345678', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathongp2000@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (78, CAST(N'2021-11-18' AS Date), N'Phat', N'employee6', N'$2b$10$nDJB4brCQOh8DvLxVRSl/us/8AQPH2/WwBfG0u9hRMd7DxWU0GhvW', N'tphcm', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathongp2000@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (79, CAST(N'2021-11-18' AS Date), N'Rolnaldo', N'employee7', N'$2b$10$3MMh.DkptaJMCBp8yV2oe.Kj9p9C2L4XFZ4rIJx1Qmvk8BuTIecNG', N'tphcm', N'0123231654', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathongp2000@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (80, CAST(N'2021-11-18' AS Date), N'Phat', N'employee8', N'$2b$10$33n4HD5uq/1Bphnf7NRjMOIpyD718HuLkUFfcwRti60BqyFnsjsei', N'tphcm', N'0123231654', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathong2000@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (81, CAST(N'2021-11-18' AS Date), N'Xuan Dieu', N'manager8', N'$2b$10$9lFxREtVbZ5.KSbJKmfOE.rRbKB7/ddkL2Y1Io4kQldGx4hc1eL1K', N'saigon', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Activated', N'manager', 1, N'kennyyou@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (82, CAST(N'2021-11-18' AS Date), N'asdasdas', N'employee9', N'$2b$10$/b4ftQrkIGD54WmoP5FDs.NyPGRbh3/wzf2aQvENWmih/zDE4TM1C', N'binhthanh', N'0901234567', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'chubathogp2000@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (83, CAST(N'2021-11-21' AS Date), N'Hai', N'employee11', N'$2b$10$R/Yyd4zAUKFSRB0wVs5VAOsBOJw54XGI9mlWaEd2zlBAvpS8aMc3W', N'saigon', N'0123456789', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'hi@gmail.com', NULL, N'https://localhost:44325/uploads/sale4.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (84, CAST(N'2021-11-21' AS Date), N'Khang', N'employee12', N'$2b$10$R/Yyd4zAUKFSRB0wVs5VAOsBOJw54XGI9mlWaEd2zlBAvpS8aMc3W', N'saigon', N'012345678', N'Viet Nam', N'Sai Gon', 1, N'Inactivated', N'employee', 1, N'aasdaddd@gmail.com', NULL, N'https://localhost:44325/uploads/ao2.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (85, CAST(N'2021-11-21' AS Date), N'Nguyen Van D', N'employee13', N'$2b$10$R/Yyd4zAUKFSRB0wVs5VAOsBOJw54XGI9mlWaEd2zlBAvpS8aMc3W', N'saigon', N'0123456789', N'Viet Nam', N'Sai Gon', 5, N'Inactivated', N'employee', 1, N'happy@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (86, CAST(N'2021-11-22' AS Date), N'Justin Bieber', N'employee14', N'$2b$10$fjDybcWp2PBhfZ5LMOc6T.xIqhLhsLllia2NhtwoBDodsMDQNNDyC', N'New York ', N'0901234567', N'US', N'New York', 6, N'Inactivated', N'employee', 67, N'bieber@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (87, CAST(N'2021-11-24' AS Date), N'bruno', N'employee17', N'$2b$10$NAWNeOy5oF9kpfi9/UUw2ug0H20VAhuDjxVGOvUD18LYgeBDsNMIu', N'saogon', N'0123231654', N'Viet Nam', N'New York', 4, N'Inactived', N'manager', 67, N'bruno@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (88, CAST(N'2021-11-24' AS Date), N'Alibaba', N'phataka', N'$2b$10$uYnb3V7yAp94Quis1U1/ke4tDDLC1PoQ2EpRtQpc/Ul80.VWg9SFm', N'BinhThanh', N'0123231654', N'Viet Nam', N'Sai Gon', 4, N'Inactivated', N'employee', 81, N'alibaba@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (89, CAST(N'2021-11-24' AS Date), N'458', N'manager9', N'$2b$10$Ou/P3XM5L040K9fHxvRNx.1H7UB1nhQKiIm42twHdoT691.LOClre', N'binhthanh', N'0901234567', N'Viet Nam', N'New York', 4, N'Activated', N'manager', 75, N'458@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (90, CAST(N'2021-11-24' AS Date), N'manager10', N'manager10', N'$2b$10$klB3X9GWFBV5tciC.8uOfe/4gHyrDbebWUnSwkRgJYL3gpBQX8UGC', N'binhthanh', N'0123231654', N'Korea', N'Seoul', 5, N'Activated', N'manager', 53, N'manager10@gmail.com', NULL, N'https://localhost:44325/uploads/noavatar.png')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (95, CAST(N'2021-11-24' AS Date), N'Phat', N'employee18', N'$2b$10$xlvW4iw/bgk4qXNKxDLtyOQvIuTBcoJcoiEQrMSM7GO1TXFyb7Fi.', N'binhthanh', N'0123231654', N'Viet Nam', N'Sai Gon', 5, N'Inactivated', N'employee', 75, N'employee18@gmail.com', NULL, N'https://localhost:44325/uploads/sale4.jpg')
INSERT [dbo].[Employee] ([EmployeeId], [joindate], [fullname], [username], [password], [address], [phoneNumber], [country], [city], [policyid], [policyStatus], [role], [managerId], [email], [securitycode], [photo]) VALUES (98, CAST(N'2021-11-25' AS Date), N'phat', N'employee20', N'$2b$10$sJK1V43I.VWAeMnk7w62o.ZuS7FA9tLKlVMSNaUwK6kYgshFiLJ2.', N'tphcm', N'0123456', N'Viet Nam', N'Sai Gon', 5, N'Activated', N'employee', 81, N'phat1110@gmail.com', NULL, N'https://localhost:44325/uploads/sale4.jpg')
SET IDENTITY_INSERT [dbo].[Employee] OFF
GO
SET IDENTITY_INSERT [dbo].[Feedback] ON 

INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (1, N'bad', N'bad service i dont appreciate ', CAST(N'2020-11-10' AS Date), N'Male', N'phat@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (2, N'good', N'good service i appreciate ', CAST(N'2020-11-10' AS Date), N'Male', N'phat@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (3, N'Avarage', N'good service i appreciate ', CAST(N'2021-11-14' AS Date), N'Female', N'a@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (4, N'Avarage', N'good service i appreciate ', CAST(N'2021-11-14' AS Date), N'Other', N'xxaaayy@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (5, N'Avarage', N'good service i appreciate ', CAST(N'2021-11-14' AS Date), N'Female', N'masteryi@gmail.com', N'0123456778', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (6, N'Avarage', N'good service i appreciate ', CAST(N'2021-11-15' AS Date), N'Male', N'a@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (7, N'good', N'good service i appreciate ', CAST(N'2021-11-15' AS Date), N'Male', N'a@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (8, N'good', N'good service i appreciate ', CAST(N'2000-11-15' AS Date), N'Male', N'a@gmail.com', N'012345678', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (9, N'Bad', N'bad service i dont appreciate ', CAST(N'2021-11-16' AS Date), N'Female', N'axaxa@gmail.com', N'0123456778', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (10, N'Bad', N'bad service i dont appreciate ', CAST(N'2021-11-18' AS Date), N'Female', N'male@gmail.com', N'09033466578', CAST(N'2020-11-10' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (11, N'good', N'good service i appreciate ', CAST(N'2000-10-11' AS Date), N'Male', N'tanphatnguyen11102000@gmail.com', N'012345678', CAST(N'2021-11-23' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (12, N'good', N'good service i appreciate ', CAST(N'2021-11-23' AS Date), N'Other', N'a@gmail.com', N'12345678', CAST(N'2021-11-23' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (13, N'Good', N'good service i appreciate ', CAST(N'2021-11-24' AS Date), N'Female', N'chubathongp2000@gmail.com', N'012345678', CAST(N'2021-11-24' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (14, N'Good', N'hello world', CAST(N'2021-11-24' AS Date), N'Female', N'a@gmail.com', N'12345678', CAST(N'2021-11-24' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (15, N'Good', N'hahaha', CAST(N'2006-07-24' AS Date), N'Male', N'a@gmail.com', N'12345678', CAST(N'2021-11-24' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (16, N'Good', N'hello', CAST(N'2004-02-25' AS Date), N'Male', N'a@gmail.com', N'0123456', CAST(N'2021-11-25' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (17, N'Good', N'ok', CAST(N'2021-11-26' AS Date), N'Female', N'a@gmail.com', N'012356478', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (18, N'US', N'ok', CAST(N'2021-11-26' AS Date), N'Female', N'a@gmail.com', N'12345678', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (19, N'Bad', N'its too bad', CAST(N'2021-11-26' AS Date), N'Male', N'a@gmail.com', N'12345678', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (20, N'Bad', N'bad request', CAST(N'2021-11-26' AS Date), N'Female', N'a@gmail.com', N'12345678', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (21, N'US', N'ok ', CAST(N'2021-11-26' AS Date), N'Male', N'{{employee.email}}', N'0123456', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (22, N'US', N'ok', CAST(N'2021-11-26' AS Date), N'Male', N'chubathongp2000@gmail.com', N'0123456', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (23, N'US', N'ok', CAST(N'2021-11-26' AS Date), N'Female', N'chubathongp2000@gmail.com', N'0901234458', CAST(N'2021-11-26' AS Date))
INSERT [dbo].[Feedback] ([FeedbackId], [rate], [message], [dateofbirth], [gender], [email], [phone], [date]) VALUES (24, N'Good', N'ok', CAST(N'2021-11-28' AS Date), N'Female', N'chubathongp2000@gmail.com', N'0901234458', CAST(N'2021-11-27' AS Date))
SET IDENTITY_INSERT [dbo].[Feedback] OFF
GO
INSERT [dbo].[Hospital] ([HospitalId], [HospitalName], [PhoneNumber], [Location], [Url]) VALUES (N'1', N'Thong Nhat', N'114', N'SaiGon', N'ThongNhat.com')
INSERT [dbo].[Hospital] ([HospitalId], [HospitalName], [PhoneNumber], [Location], [Url]) VALUES (N'2', N'Binh Thanh', N'114', N'SaiGon', N'binhthanh.com')
INSERT [dbo].[Hospital] ([HospitalId], [HospitalName], [PhoneNumber], [Location], [Url]) VALUES (N'3', N'Gia Dinh', N'114', N'SaiGon', N'giadinh.com')
INSERT [dbo].[Hospital] ([HospitalId], [HospitalName], [PhoneNumber], [Location], [Url]) VALUES (N'4', N'Quoc Te 5 sao', N'114', N'SaiGon', N'quocte.com')
GO
SET IDENTITY_INSERT [dbo].[InsuranceCompany] ON 

INSERT [dbo].[InsuranceCompany] ([CompanyId], [CompanyName], [Address], [Phone], [Url]) VALUES (1, N'VTC', N'Binh Thanh', N'099999123', N'VTC.com')
INSERT [dbo].[InsuranceCompany] ([CompanyId], [CompanyName], [Address], [Phone], [Url]) VALUES (3, N'VNG', N'Binh Thanh', N'099999123', N'VNG.com')
INSERT [dbo].[InsuranceCompany] ([CompanyId], [CompanyName], [Address], [Phone], [Url]) VALUES (6, N'Lotus', N'Go Vap', N'012345689', N'Lotus.com')
INSERT [dbo].[InsuranceCompany] ([CompanyId], [CompanyName], [Address], [Phone], [Url]) VALUES (7, N'FPT', N'District 7', N'01234567', N'FPT.com')
INSERT [dbo].[InsuranceCompany] ([CompanyId], [CompanyName], [Address], [Phone], [Url]) VALUES (8, N'Aptech', N'Nguyen Dinh Chieu q3', N'012346578', N'aptech.com')
SET IDENTITY_INSERT [dbo].[InsuranceCompany] OFF
GO
SET IDENTITY_INSERT [dbo].[Policy] ON 

INSERT [dbo].[Policy] ([policyId], [policyName], [policyDescription], [amount], [EMI], [Duration], [companyId], [hospitalId]) VALUES (1, N'Basic', N'100$ / month + 5% salary', 100.0000, 10.0000, 10, 7, N'1')
INSERT [dbo].[Policy] ([policyId], [policyName], [policyDescription], [amount], [EMI], [Duration], [companyId], [hospitalId]) VALUES (4, N'Premium', N'1200$ / year + 20% salary', 1200.0000, 120.0000, 10, 6, N'3')
INSERT [dbo].[Policy] ([policyId], [policyName], [policyDescription], [amount], [EMI], [Duration], [companyId], [hospitalId]) VALUES (5, N'VIP', N'600$ / 6 months + 10% salary', 600.0000, 60.0000, 20, 8, N'4')
INSERT [dbo].[Policy] ([policyId], [policyName], [policyDescription], [amount], [EMI], [Duration], [companyId], [hospitalId]) VALUES (6, N'Gold siver', N'300$ / 3 months + 7% salary', 300.0000, 30.0000, 10, 3, N'2')
SET IDENTITY_INSERT [dbo].[Policy] OFF
GO
SET IDENTITY_INSERT [dbo].[PolicyRequestDetails] ON 

INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (1, CAST(N'2020-11-10' AS Date), 1, 1, 20.0000, 26.0000, 1, N'Approve', 1, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (2, CAST(N'2020-11-12' AS Date), 1, 1, 20.0000, 20.0000, 1, N'Approve', 1, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (3, CAST(N'2020-11-10' AS Date), 1, 6, 20.0000, 26.0000, 1, N'Approve', 1, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (4, CAST(N'2021-11-01' AS Date), 47, 4, 12.0000, 12.0000, 1, N'Approve', 1, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (5, CAST(N'2021-11-01' AS Date), 58, 6, 10.0000, 10.0000, 1, N'Approve', 1, N'got accident', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (6, CAST(N'2021-11-01' AS Date), 58, 6, 20.0000, 10.0000, 1, N'Approve', 1, N'got accident', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (7, CAST(N'2021-11-01' AS Date), 1, 4, 25.0000, 10.0000, 1, N'Approve', 1, N'got accident', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (8, CAST(N'2021-11-17' AS Date), 63, 6, 10.0000, 10.0000, 1, N'Approve', 1, N'got accident', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (11, CAST(N'2021-11-13' AS Date), 63, 6, 10.0000, 10.0000, 1, N'Approve', 1, N'got accident', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (12, CAST(N'2021-11-17' AS Date), 63, 6, 10.0000, 10.0000, 1, N'Approve', 53, N'personal reason', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (13, CAST(N'2021-11-13' AS Date), 63, 4, 10.0000, 10.0000, 3, N'Approve', 53, N'personal reason', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (14, CAST(N'2021-11-13' AS Date), 67, 6, 10.0000, 10.0000, 3, N'Not View', 53, N'personal reason', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (15, CAST(N'2021-11-13' AS Date), 67, 4, 10.0000, 10.0000, 3, N'Approve', 53, N'personal reason', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (16, CAST(N'2021-11-13' AS Date), 67, 6, 10.0000, 10.0000, 1, N'Approve', 53, N'personal reason', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (17, CAST(N'2021-11-14' AS Date), 58, 4, 10.0000, 10.0000, 1, N'Approve', 53, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (18, CAST(N'2021-11-15' AS Date), 72, 1, 10.0000, 10.0000, 1, N'Approve', 53, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (21, CAST(N'2021-11-15' AS Date), 79, 1, 10.0000, 10.0000, 1, N'Approve', 53, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (22, CAST(N'2021-11-15' AS Date), 79, 1, 10.0000, 10.0000, 3, N'Approve', 67, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (23, CAST(N'2021-11-17' AS Date), 58, 5, 3.0000, 3.0000, 6, N'Approve', 66, N'nice place', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (24, CAST(N'2021-11-16' AS Date), 63, 5, 3.0000, 5.0000, 7, N'Approve', 66, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (25, CAST(N'2021-11-17' AS Date), 58, 5, 3.0000, 5.0000, 3, N'Approve', 66, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (26, CAST(N'2021-11-17' AS Date), 63, 4, 3.0000, 5.0000, 3, N'Approve', 72, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (27, CAST(N'2021-11-18' AS Date), 58, 1, 10.0000, 3.0000, 3, N'Not View', 68, N'bussiness', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (28, CAST(N'2021-11-18' AS Date), 72, 4, 1000.0000, 100.0000, 6, N'Approve', 75, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (29, CAST(N'2021-11-18' AS Date), 72, 1, 1000.0000, 100.0000, 1, N'Reject', 53, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (30, CAST(N'2021-11-23' AS Date), 58, 4, 1200.0000, 12.0000, 3, N'Reject', 72, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (31, CAST(N'2021-11-23' AS Date), 86, 4, 1200.0000, 12.0000, 1, N'Approve', 67, N'financial problem', N'travel to another place')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (32, CAST(N'2021-11-24' AS Date), 74, 5, 600.0000, 60.0000, 6, N'Approve', 81, N'bad request', N'near my house')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (33, CAST(N'2021-11-24' AS Date), 95, 6, 300.0000, 30.0000, 7, N'Reject', 72, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (34, CAST(N'2021-11-24' AS Date), 95, 6, 300.0000, 30.0000, 1, N'Approve', 75, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (35, CAST(N'2021-11-25' AS Date), 58, 1, 100.0000, 10.0000, 8, N'Approve', 67, N'agree', N'agree')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (36, CAST(N'2021-11-25' AS Date), 98, 5, 600.0000, 60.0000, 7, N'Approve', 81, N'ancident', N'help')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (37, CAST(N'2021-11-26' AS Date), 58, 6, 1200.0000, 120.0000, 6, N'Not View', 75, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (38, CAST(N'2021-11-26' AS Date), 58, 5, 600.0000, 60.0000, 3, N'Not View', 67, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (39, CAST(N'2021-11-26' AS Date), 58, 6, 300.0000, 30.0000, 8, N'Not View', 81, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (40, CAST(N'2021-11-26' AS Date), 58, 6, 300.0000, 30.0000, 8, N'Not View', 81, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (41, CAST(N'2021-11-26' AS Date), 58, 6, 300.0000, 30.0000, 8, N'Not View', 81, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (42, CAST(N'2021-11-26' AS Date), 58, 4, 1200.0000, 120.0000, 7, N'Not View', 81, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (43, CAST(N'2021-11-26' AS Date), 58, 5, 600.0000, 60.0000, 3, N'Approve', 67, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (44, CAST(N'2021-11-26' AS Date), 58, 6, 300.0000, 30.0000, 3, N'Approve', 67, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (45, CAST(N'2021-11-26' AS Date), 58, 6, 300.0000, 30.0000, 7, N'Approve', 87, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (46, CAST(N'2021-11-26' AS Date), 83, 4, 1200.0000, 120.0000, 6, N'Approve', 72, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (47, CAST(N'2021-11-26' AS Date), 84, 6, 300.0000, 30.0000, 6, N'Approve', 72, N'ok', N'ok')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (48, CAST(N'2021-11-26' AS Date), 58, 4, 1200.0000, 120.0000, 3, N'Approve', 66, N'axa', N'axaxa')
INSERT [dbo].[PolicyRequestDetails] ([RequestId], [RequestDate], [EmployeeId], [PolicyId], [amount], [Emi], [companyId], [Status], [ManagerId], [Reason], [description]) VALUES (49, CAST(N'2021-11-27' AS Date), 58, 5, 600.0000, 60.0000, 3, N'Approve', 53, N'nice', N'nice')
SET IDENTITY_INSERT [dbo].[PolicyRequestDetails] OFF
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_Employee] FOREIGN KEY([managerId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_Employee]
GO
ALTER TABLE [dbo].[Employee]  WITH CHECK ADD  CONSTRAINT [FK_Employee_Policy] FOREIGN KEY([policyid])
REFERENCES [dbo].[Policy] ([policyId])
GO
ALTER TABLE [dbo].[Employee] CHECK CONSTRAINT [FK_Employee_Policy]
GO
ALTER TABLE [dbo].[Policy]  WITH CHECK ADD  CONSTRAINT [FK_Policy_Hospital] FOREIGN KEY([hospitalId])
REFERENCES [dbo].[Hospital] ([HospitalId])
GO
ALTER TABLE [dbo].[Policy] CHECK CONSTRAINT [FK_Policy_Hospital]
GO
ALTER TABLE [dbo].[Policy]  WITH CHECK ADD  CONSTRAINT [FK_Policy_InsuranceCompany] FOREIGN KEY([companyId])
REFERENCES [dbo].[InsuranceCompany] ([CompanyId])
GO
ALTER TABLE [dbo].[Policy] CHECK CONSTRAINT [FK_Policy_InsuranceCompany]
GO
ALTER TABLE [dbo].[PolicyRequestDetails]  WITH CHECK ADD  CONSTRAINT [FK_PolicyRequestDetails_Employee] FOREIGN KEY([ManagerId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[PolicyRequestDetails] CHECK CONSTRAINT [FK_PolicyRequestDetails_Employee]
GO
ALTER TABLE [dbo].[PolicyRequestDetails]  WITH CHECK ADD  CONSTRAINT [FK_PolicyRequestDetails_Employee2] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[PolicyRequestDetails] CHECK CONSTRAINT [FK_PolicyRequestDetails_Employee2]
GO
ALTER TABLE [dbo].[PolicyRequestDetails]  WITH CHECK ADD  CONSTRAINT [FK_PolicyRequestDetails_InsuranceCompany] FOREIGN KEY([companyId])
REFERENCES [dbo].[InsuranceCompany] ([CompanyId])
GO
ALTER TABLE [dbo].[PolicyRequestDetails] CHECK CONSTRAINT [FK_PolicyRequestDetails_InsuranceCompany]
GO
ALTER TABLE [dbo].[PolicyRequestDetails]  WITH CHECK ADD  CONSTRAINT [FK_PolicyRequestDetails_Policy2] FOREIGN KEY([PolicyId])
REFERENCES [dbo].[Policy] ([policyId])
GO
ALTER TABLE [dbo].[PolicyRequestDetails] CHECK CONSTRAINT [FK_PolicyRequestDetails_Policy2]
GO
USE [master]
GO
ALTER DATABASE [HealthInsurance3] SET  READ_WRITE 
GO
