<template>
  <div class="user">
    <!-- // 对话框 -->
    <div class="manage">
      <el-button type="primary" @click="btn"> + 新增 </el-button>
      <el-form inline="true" :model="userForm" class="form">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        title="新增用户"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="close"
      >
        <el-form
          ref="form"
          :rules="formrules"
          :inline="true"
          :model="form"
          label-width="auto"
        >
          <el-form-item prop="name" label="姓名">
            <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item prop="age" label="年龄">
            <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="birth" label="出生日期">
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-mm-dd"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item prop="addr" label="地址">
            <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancle">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" height="85%" style="width: 100%" stripe="true">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span>{{ scope.row.sex ? "男" : "女" }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="del(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @current-change="changePage"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getUserList, createUser, updateUser, deleteUser } from "@/api/index";
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      formrules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        birth: [{ required: true, message: "请选择出生日期" }],
        addr: [{ required: true, message: "请输入地址" }],
      },
      tableData: [],
      modalType: 0, //0表示新增，1表示编辑
      dialogVisible: false,
      total: 0,
      pageData: {
        page: 1,
        limit: 10,
      },
      userForm: {
        name: "",
      },
    };
  },
  methods: {
    // 对话框方法
    btn() {
      this.dialogVisible = true;
      this.modalType = 0;
    },
    close() {
      this.$confirm("确认关闭？");
      this.dialogVisible = false;
      this.$refs.form.resetFields();
    },
    cancle() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    // 表单方法
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.modalType === 0) {
            createUser(this.form).then(() => {
              // 数据添加之后，重新获取列表
              this.getList();
            });
          } else {
            updateUser(this.form).then(() => {
              // 数据添加之后，重新获取列表
              this.getList();
            });
          }
          alert("提交成功");
          this.$refs.form.resetFields();
          this.dialogVisible = false;
        } else {
          alert("请填写信息");
          console.log("error submit!!");
          return false;
        }
      });
    },
    edit(index, row) {
      this.dialogVisible = true;
      this.modalType = 1;
      this.form = row;
    },
    del(index, row) {
      this.$confirm("确认删除？");
      deleteUser({ id: row.id });
      this.getList();
    },
    getList() {
      getUserList({ params: { ...this.pageData, ...this.userForm } }).then(
        (res) => {
          this.tableData = res.list;
          this.total = res.count || 0;
        }
      );
    },
    changePage(val) {
      this.pageData.page = val;
      this.getList();
    },
    search() {
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

.<style lang="less" scoped>
.user {
  height: 100%;
  .manage {
    position: relative;
    .form {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .manage {
    // display: flex;
    position: relative;
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>