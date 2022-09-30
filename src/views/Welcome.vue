<template>
	<div class="welcome">

		<div class="welcome__link">
			<router-link
					:to="'/'"
					exact
				>
					Back to Home
			</router-link>
		</div>

		<div class="welcome__add">
			<button id="open-add-modal" @click="openAddModal()">Add</button>
		</div>

		<Modal
			v-if="isShowModal"
			:modal-title="isEditForm ? 'Edit new table row' : 'Add new table row'"
			@closeModal="modalClose"
		>
			<my-form
				:isEdit="isEditForm"
				:incomeForm="editForm"
				@saveForm="formSave($event)"
				@editForm="formEdit($event)"
			></my-form>
		</Modal>

		<table class="welcome__table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Area</th>
					<th>Location</th>
					<th>Image</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(table, index) in localTableList" :key="index">
					<td data-header="ID">{{table.id}}</td>
					<td data-header="Name">{{table.name}}</td>
					<td data-header="Area">{{table.area}}</td>
					<td data-header="Location">{{table.location}}</td>
					<td data-header="Image">{{table.img}}</td>
					<td data-header="Actions">
						<div class="welcome__table--action-wrap">
							<button id="open-edit-modal" @click="editModal(index)">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
									<defs>
										<clipPath id="a">
											<rect fill="none" width="16" height="16"/>
										</clipPath>
									</defs>
									<g clip-path="url(#a)">
										<path fill="#9c9ca6"
													d="M13.6,6l-8.96,8.96L.638,16a.56.56,0,0,1-.64-.64l.96-3.92L10,2.4Zm1.68-5.28h0a2.56,2.56,0,0,0-3.6,0l-.96.96,3.6,3.6.88-.88a2.66,2.66,0,0,0,.08-3.68"
													transform="translate(0.002 0.005)"/>
									</g>
								</svg>
							</button>	
							<button id="open-delete-modal" @click="deleteFromServer(index, table.id)">
								<svg xmlns="http://www.w3.org/2000/svg" width="14.496" height="16" viewBox="0 0 14.496 16">
									<path fill="#f02944"
												d="M233.416,147.014H220.381a.73.73,0,0,1,0-1.46h13.035a.73.73,0,0,1,0,1.46Zm-4.207-3.275a.73.73,0,0,0-.73-.73h-3.16a.73.73,0,0,0,0,1.46h3.16A.73.73,0,0,0,229.209,143.738Zm3.662,5.091v7.258a2.921,2.921,0,0,1-2.921,2.921h-6.1a2.921,2.921,0,0,1-2.921-2.921V148.83a.73.73,0,0,1,.73-.73h10.484A.73.73,0,0,1,232.871,148.83Zm-7.245,2.074a.73.73,0,1,0-1.46,0v5.164a.73.73,0,1,0,1.46,0Zm4.007,0a.73.73,0,0,0-1.46,0v5.164a.73.73,0,1,0,1.46,0Z"
												transform="translate(-219.651 -143.008)"/>
								</svg>
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from "axios";
const baseUrl = "http://localhost:3001/tbl";

export default {
	name: "Welcome",
	data() {
		return {
			isEditForm: false,
			isShowModal: false,
			localTableList: [],
			editForm: {},
		}
	},
	async created() {
    try {
      const res = await axios.get(baseUrl);

      this.localTableList = res.data;
    } catch (e) {
      console.error(e);
    }
  },
	methods: {
		modalClose () {
			this.isShowModal = !this.isShowModal;
		},

		openAddModal() {
			this.isShowModal = !this.isShowModal;
			this.isEditForm = false;
		},

		editModal(index) {
			this.isShowModal = !this.isShowModal;
			this.isEditForm = true;
			this.editForm = this.localTableList[index];
		},

		async formSave(event) {
			this.isShowModal = !this.isShowModal;

			const payload = {
				name: event.name,
        area: event.area,
        location: event.location,
        img: event.img,
			}
			
			try {
        const res = await axios.post(baseUrl, payload);
        this.localTableList = [...this.localTableList, res.data];
      } catch (e) {
        console.error(e);
      }
		},

		async formEdit (event) {
			this.isShowModal = !this.isShowModal;

			let editIndex = this.localTableList.findIndex((el) => el.id === event.id);

			try {
				await axios.patch(`${baseUrl}/${editIndex}`, {
					name: event.name,
					area: event.area,
					location: event.location,
					img: event.img,
				});

				this.localTableList = this.localTableList.map(el => {
					if (el.id === event.id) {
						el.name = event.name;
						el.area = event.area;
						el.location = event.location;
						el.img = event.img;
					}

					return el;
				});
			} catch (e) {
				console.error(e);
			}
		},

		async deleteFromServer(index, id) {
			axios.delete(`${baseUrl}/${index}`);

			this.localTableList = this.localTableList.filter((el) => el.id !== id);
		}

	}
}
</script>