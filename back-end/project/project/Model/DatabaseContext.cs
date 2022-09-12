using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace project.Model
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<Hospital> Hospitals { get; set; }
        public virtual DbSet<InsuranceCompany> InsuranceCompanies { get; set; }
        public virtual DbSet<Policy> Policies { get; set; }
        public virtual DbSet<PolicyRequestDetail> PolicyRequestDetails { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Message)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("message");

                entity.Property(e => e.Name)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee");

                entity.Property(e => e.Address)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("city");

                entity.Property(e => e.Country)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("country");

                entity.Property(e => e.Email)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Fullname)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("fullname");

                entity.Property(e => e.Joindate)
                    .HasColumnType("date")
                    .HasColumnName("joindate");

                entity.Property(e => e.ManagerId).HasColumnName("managerId");

                entity.Property(e => e.Password)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("phoneNumber");

                entity.Property(e => e.Photo)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("photo");

                entity.Property(e => e.PolicyStatus)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("policyStatus");

                entity.Property(e => e.Policyid).HasColumnName("policyid");

                entity.Property(e => e.Role)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("role");

                entity.Property(e => e.Securitycode)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("securitycode");

                entity.Property(e => e.Username)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("username");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK_Employee_Employee");

                entity.HasOne(d => d.Policy)
                    .WithMany(p => p.Employees)
                    .HasForeignKey(d => d.Policyid)
                    .HasConstraintName("FK_Employee_Policy");
            });

            modelBuilder.Entity<Feedback>(entity =>
            {
                entity.ToTable("Feedback");

                entity.Property(e => e.Date)
                    .HasColumnType("date")
                    .HasColumnName("date");

                entity.Property(e => e.Dateofbirth)
                    .HasColumnType("date")
                    .HasColumnName("dateofbirth");

                entity.Property(e => e.Email)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Gender)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("gender");

                entity.Property(e => e.Message)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("message");

                entity.Property(e => e.Phone)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("phone");

                entity.Property(e => e.Rate)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("rate");
            });

            modelBuilder.Entity<Hospital>(entity =>
            {
                entity.ToTable("Hospital");

                entity.Property(e => e.HospitalId)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HospitalName)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.Location)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Url)
                    .HasMaxLength(250)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<InsuranceCompany>(entity =>
            {
                entity.HasKey(e => e.CompanyId);

                entity.ToTable("InsuranceCompany");

                entity.Property(e => e.Address)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Url)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Policy>(entity =>
            {
                entity.ToTable("Policy");

                entity.Property(e => e.PolicyId).HasColumnName("policyId");

                entity.Property(e => e.Amount)
                    .HasColumnType("money")
                    .HasColumnName("amount");

                entity.Property(e => e.CompanyId).HasColumnName("companyId");

                entity.Property(e => e.Emi)
                    .HasColumnType("money")
                    .HasColumnName("EMI");

                entity.Property(e => e.HospitalId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("hospitalId");

                entity.Property(e => e.PolicyDescription)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("policyDescription");

                entity.Property(e => e.PolicyName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("policyName");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Policies)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_Policy_InsuranceCompany");

                entity.HasOne(d => d.Hospital)
                    .WithMany(p => p.Policies)
                    .HasForeignKey(d => d.HospitalId)
                    .HasConstraintName("FK_Policy_Hospital");
            });

            modelBuilder.Entity<PolicyRequestDetail>(entity =>
            {
                entity.HasKey(e => e.RequestId);

                entity.Property(e => e.Amount)
                    .HasColumnType("money")
                    .HasColumnName("amount");

                entity.Property(e => e.CompanyId).HasColumnName("companyId");

                entity.Property(e => e.Description)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Emi).HasColumnType("money");

                entity.Property(e => e.Reason)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.RequestDate).HasColumnType("date");

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.PolicyRequestDetails)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("FK_PolicyRequestDetails_InsuranceCompany");

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.PolicyRequestDetailEmployees)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK_PolicyRequestDetails_Employee2");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.PolicyRequestDetailManagers)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK_PolicyRequestDetails_Employee");

                entity.HasOne(d => d.Policy)
                    .WithMany(p => p.PolicyRequestDetails)
                    .HasForeignKey(d => d.PolicyId)
                    .HasConstraintName("FK_PolicyRequestDetails_Policy2");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
